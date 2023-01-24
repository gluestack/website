const path = require("path");
const { execSync, spawn } = require("child_process");
const repoConfig = require("./storybook-repo-config.json");
const fs = require("fs-extra");
const promisify = require("util").promisify;
const lstat = promisify(require("fs").lstat);

const tmpPath = path.join(__dirname, "tmp");
const pagesPath = path.join(__dirname, "../pages");
const docsPath = path.join(pagesPath, "docs/0.1.x");
const repoTempPath = path.join(tmpPath, repoConfig.repoName);
const copyPath = path.join(pagesPath, repoConfig.destinationPath);
const sideBarFilePath = path.join(__dirname, "../versions.json");
const wrapperTemplatePath = path.join(__dirname, "WrapperTemplate.tsx");
const nextAssetsPath = path.join(__dirname, "../public/assets");

let sideBarObj = {};
let tsxFilesMap = {};

const importsForReactLive = `
import { LiveProvider, LivePreview } from "react-live";
`;
const reactLiveTemplate = `
<LiveProvider code={"<**functionName** />"} scope={{ **functionName** }}>
  <LivePreview />
</LiveProvider>`;

main();
function main() {
  cleanUp(tmpPath);
  cleanUp(copyPath);
  // cleanUp(nextAssetsPath);
  cloneRepoSrc();
}

function cloneRepoSrc() {
  if (!fs.existsSync(copyPath)) {
    createFolders(copyPath);
  }

  execSync("git clone " + repoConfig.gitUrl, {
    stdio: [0, 1, 2], // we need this so node will print the command output
    cwd: tmpPath, // path to where you want to save the file
  });

  console.log("Cloned", repoConfig.repoName);

  changeBranch(repoTempPath, repoConfig.branchName)
    .then((data) => {
      console.log(data, "Data from shell script to checkout branch");

      // Copy all the docs files to docs destination
      copyFiles(
        path.join(tmpPath, repoConfig.repoName, repoConfig.docsPath),
        copyPath
      );

      // Convert folder structure to kebab case
      convertFolderStructureToKebabCase(copyPath);

      // Copy all the assets files to public/assets
      copyFiles(
        path.join(tmpPath, repoConfig.repoName, repoConfig.assetsPath),
        nextAssetsPath
      );

      // Delete all the ignored folders in the docs destination
      deleteIgnoredFolders(copyPath, repoConfig.ignoredfolders);

      getTSXfilesMap(copyPath);
      let mdxFilesArray = getMDXFiles(copyPath);
      createSidebarJSON(mdxFilesArray);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createSidebarJSON(arr) {
  for (let i = 0; i < arr.length; i++) {
    let filePath = arr[i];

    if (filePath.endsWith(".stories.mdx")) {
      fs.renameSync(filePath, filePath.replace(".stories", ""));
      filePath = filePath.replace(".stories", "");
    }

    let matchString = repoConfig.destinationPath;

    const result = filePath.slice(
      filePath.indexOf(matchString) + matchString.length
    );

    let fileDataString = fs.readFileSync(path.join(copyPath, result), "utf8");
    let metaDataString = fileDataString.match(`(.*?|)?<Meta.*`)[0];
    let heading = metaDataString.split('"')[1];
    addPageToSidebarJSON(heading, result);

    let modifiedFileData = removeMetaAndImportStatements(fileDataString);
    let reactLiveCodeInjectedCode = injectReactLiveCodeForJSXFiles(
      modifiedFileData,
      filePath
    );

    // Remove all import and meta statements from mdx files:

    fs.writeFileSync(filePath, reactLiveCodeInjectedCode);
  }
  // convertFolderStructureToKebabCase(copyPath);
  let finalSideBarDataJSON = transformToSideBarJson();

  fs.writeFileSync(sideBarFilePath, JSON.stringify(finalSideBarDataJSON), {
    encoding: "utf8",
    flag: "w",
  });

  cleanUp(tmpPath);
  return;
}

function addPageToSidebarJSON(heading, pagePath) {
  let completePagePath = path.join(copyPath, pagePath);

  let pageId = completePagePath.slice(
    completePagePath.indexOf(docsPath) + docsPath.length
  );
  let pagePathId = pageId.substring(0, pageId.lastIndexOf("/"));

  let categoryTitle = heading.split("/")[0];
  let pageTitle = heading.split("/")[1];

  if (Object.keys(sideBarObj).includes(categoryTitle)) {
    sideBarObj[categoryTitle] = [
      ...sideBarObj[categoryTitle],
      { id: pagePathId, title: pageTitle },
    ];
  } else {
    sideBarObj[categoryTitle] = [
      {
        id: pagePathId,
        title: pageTitle,
      },
    ];
  }
}

function transformToSideBarJson() {
  let sideBarPagesData = Object.keys(sideBarObj).map((heading) => {
    return {
      type: "heading",
      title: heading,
      pages: sideBarObj[heading],
    };
  });

  return {
    versions: [
      {
        "0.1.x": {
          sidebar: [
            {
              type: "heading",
              title: "",
              pages: sideBarPagesData,
            },
          ],
        },
      },
    ],
    firstPage: sideBarPagesData[0]?.pages[0]?.id,
  };
}

function getMDXFiles(folder) {
  let mdxFiles = [];
  let files = fs.readdirSync(folder);
  for (let file of files) {
    let filePath = path.join(folder, file);
    let stats = fs.statSync(filePath);
    if (stats.isFile() && file.endsWith(".mdx")) {
      mdxFiles.push(filePath);
    } else if (stats.isDirectory()) {
      mdxFiles = mdxFiles.concat(getMDXFiles(filePath));
    }
  }
  return mdxFiles;
}

function getTSXfilesMap(folder) {
  let files = fs.readdirSync(folder);
  for (let file of files) {
    let filePath = path.join(folder, file);
    let stats = fs.statSync(filePath);
    if (
      stats.isFile() &&
      file.endsWith(".tsx") &&
      !file.endsWith(".stories.tsx")
    ) {
      let lowerCaseFileName = file.replace(".tsx", "").toLowerCase();
      if (file.endsWith(".web.tsx")) {
        if (tsxFilesMap.hasOwnProperty(lowerCaseFileName.replace(".web", ""))) {
          tsxFilesMap[lowerCaseFileName.replace(".web", "")] = filePath;
        }
      } else {
        tsxFilesMap[lowerCaseFileName] = filePath;
        // Replace wrapper file with template
        if (file == "Wrapper.tsx") {
          fs.writeFileSync(
            filePath,
            fs.readFileSync(wrapperTemplatePath, "utf-8"),
            {
              encoding: "utf8",
              flag: "w",
            }
          );
        }
      }
    } else if (stats.isFile() && file.endsWith(".stories.tsx")) {
      fs.unlinkSync(filePath);
    } else if (stats.isDirectory()) {
      getTSXfilesMap(filePath);
    }
  }
}

function removeMetaAndImportStatements(fileDataString) {
  const importRegex = /^import.*;$/gm;
  const metaRegex = /<Meta.*\/>/gm;
  fileDataString = fileDataString
    .replaceAll(importRegex, "")
    .replaceAll(metaRegex, "");

  // let imgTags = fileDataString.match(/(<img[\s\S]*?>)/g);

  // if (imgTags) {
  //   for (let i = 0; i < imgTags.length; i++) {
  //     let srcRegex = /src="(\/assets.*?)"/;
  //     let srcPath = imgTags[i].match(srcRegex)
  //       ? imgTags[i].match(srcRegex)[1]
  //       : null;

  //     let replacedImgTagPath = imgTags[i].replace(
  //       imgTags[i].match(/src="(.*?)"/)[1],
  //       srcPath
  //     );

  //     fileDataString = fileDataString.replace(imgTags[i], replacedImgTagPath);
  //   }
  // }

  return fileDataString;
}

function injectReactLiveCodeForJSXFiles(fileDataString, filePath) {
  let canvasStoryDataString = fileDataString.match(
    /<Canvas>((.|\n)*?)<\/Canvas>/gm
  );
  if (canvasStoryDataString) {
    let importsForReactLiveComponents = importsForReactLive;
    // If there are more than one canvas tags in the file, hence this `for` loop
    for (let i = 0; i < canvasStoryDataString.length; i++) {
      const idDataStringValue = canvasStoryDataString[i].split('"')[1];
      if (idDataStringValue) {
        let getCodeFileName = idDataStringValue
          .split("--")
          .pop()
          .replaceAll("-", "");

        if (tsxFilesMap[getCodeFileName]) {
          let codeDataString = fs.readFileSync(
            tsxFilesMap[getCodeFileName],
            "utf-8"
          );

          let regex = /export\s+(const|let|var|function)\s+(\w+)\s*(=|\()/g;
          let match = regex.exec(codeDataString)[2];

          // Generate react live code
          let reactLiveCode = reactLiveTemplate;
          reactLiveCode = reactLiveCode.replaceAll("**functionName**", match);

          fileDataString = fileDataString.replace(
            canvasStoryDataString[i],
            reactLiveCode
          );

          importsForReactLiveComponents += `import { ${match} } from "./${match}";\n`;
        }
      }
    }
    fileDataString = importsForReactLiveComponents + "\n\n" + fileDataString;
  }
  return fileDataString;
}

function cleanUp(tmpPath) {
  console.log("Cleanig up tmp");
  let files = fs.readdirSync(tmpPath);
  for (let i = 0; i < files.length; i++) {
    const fileDir = path.join(tmpPath, files[i]);
    if (!fileDir.includes(".gitignore")) {
      fs.rmSync(fileDir, { recursive: true, force: true });
    }
  }
}

function copyFiles(srcDir, destDir) {
  try {
    if (fs.existsSync(srcDir)) {
      fs.copySync(srcDir, destDir, {
        overwrite: true,
      });
    }
  } catch (err) {
    console.error(err);
  }
}

function deleteIgnoredFolders(srcDir, foldersArray) {
  try {
    for (let i = 0; i < foldersArray.length; i++) {
      if (fs.existsSync(path.join(srcDir, foldersArray[i]))) {
        if (foldersArray[i].includes(".")) {
          fs.unlinkSync(path.join(srcDir, foldersArray[i]));
        } else {
          fs.rmSync(path.join(srcDir, foldersArray[i]), {
            recursive: true,
            force: true,
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function changeBranch(repoPath, repoName) {
  let scriptPath = path.join(__dirname, "change-branch.sh");
  let ls = spawn("sh", [scriptPath, repoPath, repoName]);

  let data = "";
  for await (const chunk of ls.stdout) {
    console.log("stdout chunk: " + chunk);
    data += chunk;
  }
  let error = "";
  for await (const chunk of ls.stderr) {
    console.error("stderr chunk: " + chunk);
    error += chunk;
  }
  const exitCode = await new Promise((resolve, reject) => {
    ls.on("close", resolve);
  });

  if (exitCode) {
    throw new Error(`subprocess error exit ${exitCode}, ${error}`);
  }
  return data;
}

const camelToKebab = (str) => {
  return str
    .replace(/([a-z])([A-Z])|\s+/g, (match, $1, $2) => {
      return $1 ? `${$1}-${$2.toLowerCase()}` : "-";
    })
    .toLowerCase();
};

const convertFolderStructureToKebabCase = (folderPath) => {
  fs.readdirSync(folderPath).forEach((file) => {
    let currentPath = path.join(folderPath, file);
    if (fs.lstatSync(currentPath).isDirectory()) {
      let newName = camelToKebab(file);
      let newPath = path.join(folderPath, newName);
      fs.renameSync(currentPath, newPath);
      convertFolderStructureToKebabCase(newPath);
    }
  });
};

function createFolders(pathx) {
  const parts = pathx.split("/");
  let currentPath = "";

  parts.forEach((part) => {
    currentPath += part + "/";
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath);
    }
  });
}
