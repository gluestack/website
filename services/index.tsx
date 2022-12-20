import client from "./apollo-client";
import { gql } from "@apollo/client";

export function BlogService() {
  return client.query({
    query: gql`
    query getBlog {
      blogs {
        data {
          attributes {
            title
            shortDes
            slug
            coverImg {
              data {
                attributes {
                  url
                }
              }
            }
            altText
            details
            publish_date
            blog_author {
              data {
                attributes {
                  name
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  altText
                }
              }
            }
            blog_tags{
              data{
                attributes{
                  name
                }
              }
            }
            blog_categories{
              data{
                attributes{
                  name
                }
              }
            }
          }
        }
      }
    }
    `,
  });
}

export function ShowCaseService() {
  return client.query({
    query: gql`
    query{
      events{
        data{
          attributes{
            title
            description
            slug
            coverImg{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
    `,
  });
}