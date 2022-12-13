#! /bin/bash

const path = require("path");
const { execSync } = require("child_process");
const repoConfig = require("../repo-config.json");
const fs = require("fs-extra");

const pagesPath = path.join(__dirname, "../pages");
const ignoredfolder = ["_app.tsx", "index.tsx", "api"];
const tmpPath = path.join(__dirname, "tmp");
const copyPath = path.join(pagesPath, "/docs/1.0.x/");

const cloneRepoPages = () => {
  Object.keys(repoConfig).map((e) => {
    execSync("git clone " + repoConfig[e].gitUrl, {
      stdio: [0, 1, 2], // we need this so node will print the command output
      cwd: tmpPath, // path to where you want to save the file
    });

    if (!fs.existsSync(path.join(copyPath, repoConfig[e]["repoName"]))) {
      fs.mkdirSync(path.join(copyPath, repoConfig[e]["repoName"]));
    }

    copyFiles(
      path.join(tmpPath, repoConfig[e]["repoName"], repoConfig[e]["pagesPath"]),
      path.join(copyPath, repoConfig[e]["repoName"])
    );

    deleteIgnoredFiles(path.join(copyPath, repoConfig[e]["repoName"]));
  });
};

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
