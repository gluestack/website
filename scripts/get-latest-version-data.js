#! /bin/bash

const path = require("path");
const { execSync } = require("child_process");
const repoConfig = require("../repo-config.json");
const fs = require("fs-extra");

const pagesPath = path.join(__dirname, "../pages");
const ignoredfolder = ["_app.tsx", "index.tsx", "api"];
const tmpPath = path.join(__dirname, "tmp");
let data1 = [];
const cloneRepoPages = () => {
  Object.keys(repoConfig).map((e) => {
    // console.log(e, repoConfig[e]);
    let repoInfo = repoConfig[e];

    let copyPath = path.join(pagesPath, repoInfo.destinationPath);
    // execSync("git clone " + repoConfig[e].gitUrl, {
    //   stdio: [0, 1, 2], // we need this so node will print the command output
    //   cwd: tmpPath, // path to where you want to save the file
    // });
    if (
      fs.existsSync(path.join(tmpPath, repoInfo["repoName"], "versions.json"))
    ) {
      let data = fs.readFileSync(
        path.join(tmpPath, repoInfo["repoName"], "versions.json"),
        {
          encoding: "utf-8",
        }
      );
      data = JSON.parse(data);
      data1 = [
        ...data1,
        getLatestVersion(data.versions)[
          Object.keys(getLatestVersion(data.versions))[0]
        ].sidebar,
      ];
      console.log(
        // getLatestVersion(data.versions)[
        //   Object.keys(getLatestVersion(data.versions))[0]
        // ].sidebar,
        data1,
        JSON.stringify(data1)
      );
      // if (!fs.existsSync(path.join(copyPath))) {
      //   fs.mkdirSync(path.join(copyPath));
      // }
      // copyFiles(
      //   path.join(
      //     tmpPath,
      //     repoInfo["repoName"],
      //     "pages",
      //     Object.keys(getLatestVersion(data.versions))[0]
      //   ),
      //   path.join(copyPath)
      // );
      // deleteIgnoredFiles(path.join(copyPath));
    }
  });
};

function getLatestVersion(data) {
  return data[data.length - 1];
}

const deleteIgnoredFiles = (path1) => {
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
};

const copyFiles = (srcDir, destDir) => {
  try {
    if (fs.existsSync(srcDir)) {
      fs.copySync(srcDir, destDir, {
        overwrite: true,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

cloneRepoPages();
