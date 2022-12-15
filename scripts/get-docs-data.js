#! /bin/bash
const path = require("path");
const { execSync, spawn } = require("child_process");
const repoConfig = require("../repo-config.json");
const fs = require("fs-extra");

const pagesPath = path.join(__dirname, "../pages");
const ignoredfolder = ["_app.tsx", "index.tsx", "api"];
const tmpPath = path.join(__dirname, "tmp");

let sidebarTemplate = {
  versions: [
    {
      "1.x": {
        sidebar: [],
      },
    },
  ],
};

main();
function main() {
  cleanUp(tmpPath);
  cloneRepoPages();
}

// sidebarTemplate.versions[0]['1.x'].sidebar.push()
function cloneRepoPages() {
  Object.keys(repoConfig).map((e) => {
    // console.log(e, repoConfig[e]);
    let repoInfo = repoConfig[e];
    const versionJsonPath = path.join(
      tmpPath,
      repoInfo["repoName"],
      repoInfo["docsPath"],
      "versions.json"
    );

    const repoPath = path.join(tmpPath, repoInfo["repoName"]);

    let copyPath = path.join(pagesPath, repoInfo.destinationPath);
    execSync("git clone " + repoConfig[e].gitUrl, {
      stdio: [0, 1, 2], // we need this so node will print the command output
      cwd: tmpPath, // path to where you want to save the file
    });

    console.log("Cloned", repoInfo["repoName"]);
    changeBranch(repoPath, repoInfo["branchName"])
      .then((data) => {
        console.log(data, "Data from shell script to checkout branch");
        if (fs.existsSync(versionJsonPath)) {
          let data = fs.readFileSync(versionJsonPath, {
            encoding: "utf-8",
          });
          data = JSON.parse(data);
          let sidebarData = getLatestVersion(data.versions)[
            Object.keys(getLatestVersion(data.versions))[0]
          ].sidebar;

          if (repoInfo.rootDocs) {
            sidebarData.map((data) => {
              sidebarTemplate.versions[0]["1.x"].sidebar.push(data);
            });
          } else {
            let obj = {
              type: "sidebar",
              title: repoInfo["repoName"],
              pages: [],
            };
            sidebarData.map((data) => {
              obj.pages.push(data);
            });
            sidebarTemplate.versions[0]["1.x"].sidebar.push(obj);
          }

          if (!fs.existsSync(path.join(copyPath))) {
            fs.mkdirSync(path.join(copyPath));
          }
          if (fs.existsSync(path.join(__dirname, "../versions.json"))) {
            fs.writeFileSync(
              path.join(__dirname, "../versions.json"),
              JSON.stringify(sidebarTemplate)
            );
          }
          copyFiles(
            path.join(
              tmpPath,
              repoInfo["repoName"],
              repoInfo["docsPath"],
              "pages",
              Object.keys(getLatestVersion(data.versions))[0]
            ),
            path.join(copyPath)
          );
          deleteIgnoredFiles(path.join(copyPath));
          cleanUp(tmpPath);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function getLatestVersion(data) {
  return data[data.length - 1];
}

function deleteIgnoredFiles(path1) {
  for (let i = 0; i < ignoredfolder.length; i++) {
    if (fs.existsSync(path.join(path1, ignoredfolder[i]))) {
      if (ignoredfolder[i].includes(".")) {
        fs.unlinkSync(path.join(path1, ignoredfolder[i]));
      } else {
        fs.rmSync(path.join(path1, ignoredfolder[i]), {
          recursive: true,
          force: true,
        });
      }
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

// function changeBranch(repoPath, repoName) {
//   let scriptPath = path.join(__dirname, "change-branch.sh");
//   let ls = spawn("sh", [scriptPath, repoPath, repoName]);

//   ls.stdout.on("data", function (data) {
//     console.log(`Output: ${data}`);
//   });

//   ls.stderr.on("data", (data) => {
//     console.log(`stderr: ${data}`);
//   });

//   ls.on("error", (error) => {
//     console.log(`error: ${error.message}`);
//   });

//   ls.on("close", (code) => {
//     return 1;
//   });
// }
