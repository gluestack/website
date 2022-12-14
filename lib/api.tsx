export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}
export async function fetchAPI(path: any, urlParamsObject: any, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };
  //   const queryString = qs.stringify(urlParamsObject);
  const queryString = urlParamsObject.slug;
  console.log(queryString, "queryString");

  const requestUrl = `${getStrapiURL(
    `/api/${path}${queryString ? `=${queryString}` : ""}&populate=*`
  )}`;
  console.log(requestUrl);
  try {
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "Error in API.TSX");
    throw new Error("404");
  }
}
