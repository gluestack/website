import { versions } from "../../versions.json";
let filePaths: string[] = [""];

function getPrevNextPage(route: any) {
  var ary = route.split("/");
  ary.splice(0, 3);

  let path = ary.join("/");

  let jsonSiderbarData: any = getSidebarJsonData();
  let version = Object.keys(versions[versions.length - 1]);

  let sidebarData = jsonSiderbarData[version[0]]["sidebar"];

  getFilePaths({
    pagesData: sidebarData[0].pages,
    path: path,
  });

  let data = getPreviousNextPageData({ path: path });
  return data;
}

function getPreviousNextPageData({ path }: any) {
  let prevNextData = {
    prev: "",
    next: "",
  };
  for (let i = 0; i < filePaths.length; i++) {
    if (filePaths[i] == path) {
      if (filePaths[i - 1]) {
        prevNextData.prev = filePaths[i - 1];
      }
      if (filePaths[i + 1]) {
        prevNextData.next = filePaths[i + 1];
      }
    }
  }
  return prevNextData;
}

function getFilePaths({ pagesData }: any) {
  for (let i = 0; i < pagesData?.length; i++) {
    let element = pagesData[i];
    if (element.id) {
      if (!filePaths.includes(element.id)) {
        filePaths = [...filePaths, element.id];
      }
    } else if (element.pages) {
      getFilePaths({ pagesData: element.pages });
    }
  }
}

function getSidebarJsonData() {
  let version = Object.keys(versions[versions.length - 1]);

  for (let i = 0; i < versions.length; i++) {
    if (Object.keys(versions[i])[0] == version[0]) {
      return versions[i];
    }
  }
}

export { getPrevNextPage };
