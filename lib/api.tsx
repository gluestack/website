export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://strapi.gluestack.io"
  }${path}`;
}
interface OptinType{
  author:string,
  categories:string,
  tags:string,
}
export async function fetchAPI(path: any, urlParamsObject: any, options:OptinType) {
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
    `/api/${path}${queryString ? `=${queryString}` : ""}&&populate=${options.author}.image&populate=coverImg.image&populate=${options.categories}&populate=${options.tags}`
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

export async function PostAPI(id: number) {
  try {
    //If we need we can pass dynamic collection name
    let body = {
      query: `
    query{
      blog ( id: "${id}" ){
        data{
          id
          attributes{
            title
            shortDes
            coverImg {
              data {
                attributes {
                  url
                }
              }
            }
            slug
          }
        }
      }
    }
    `,
      variables: {},
    };
    const requestOptions: any = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {}
}