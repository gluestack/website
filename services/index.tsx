import client from "./apollo-client";
import { gql } from "@apollo/client";

export function teamService() {
    return client.query({
      query: gql`
      query{
        teams{
          data{
            id
            attributes{
              name
              designation
              twitter
              github
              linkedin
              image{
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
  
  