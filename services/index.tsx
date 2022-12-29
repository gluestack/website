import client from "./apollo-client";
import { gql } from "@apollo/client";

export function BlogService() {
  return client.query({
    query: gql`
    query getBlog {
      blogs(sort: "publish_date:DESC")
      {
            data {
              id
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

export function CookieService() {
  return client.query({
    query: gql`
    query{
      cookiePolicy{
        data{
          attributes{
            title
            description
          }
        }
      }
    }
    `,
  });
}
export function TermService() {
  return client.query({
    query: gql`
    query{
      term{
        data{
          attributes{
            title
            description
            disclaimer
          }
        }
      }
    }
    `,
  });
}
export function PrivacyService() {
  return client.query({
    query: gql`
    query{
      privacyPolicy{
        data{
          attributes{
            title
            description
          }
        }
      }
    }
    `,
  });
}