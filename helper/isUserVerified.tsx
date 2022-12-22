import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import config from "../config";
import { signIn } from "next-auth/react";

export enum UserStatusEnum {
  ON_WAITLIST = "on_waitlist",
  DEV_PREVIEW = "dev_preview",
}

export interface IUserModel {
  id: number;
  name: string;
  email: string;
  picture?: string;
  team: ITeamModel | null;
  status?: UserStatusEnum;
}

export interface ITeamModel {
  id: number;
  name: string;
  token?: string;
  refresh_token?: string;
}

const isUserVerified = (_user: IUserModel | null) => {
  return new Promise<boolean>(async (resolve, reject) => {
    console.log("USER", _user);

    const token = _user?.team?.refresh_token ?? "";
    const teamId = _user?.team?.id ?? 0;

    console.log("API RESPONSE", { token, teamId, user: _user });

    // IF NO USER OR TEAM TOKEN IS PRESENT
    if (!_user || !token || !teamId) {
      resolve(false);
      return;
    }

    try {
      const client = createApolloClient(token ?? "");

      const response = await client.mutate({
        mutation: gql`
        mutation {
         refreshToken(input: {team_id: ${teamId}}) {
          success
          message
          data {
            email
            id
            name
            status
            team {
              id
              is_single_member
              name
              refresh_token
              role
              token
            }
          }
        }
          }
        `,
      });

      console.log("RESPONSE", response?.data?.refreshToken);

      // let _userFromResponse =
      //   JSON.parse(JSON.stringify(response?.data?.refreshToken?.data)) || null;

      // //
      // if (_userFromResponse?.status != UserStatusEnum.DEV_PREVIEW) {
      //   console.log("NOT DEV PREVIEW");
      //   resolve(false);
      //   return;
      // }

      // NOW CALL SIGNIN FROM CREDENTIALS
      const res = await signIn("credentials", {
        redirect: false,
        action: "changeTeam",
        callbackUrl: "/",
        accessToken: token,
        teamId: `${teamId}`,
      });

      console.log("credentoals", res);
      // REDIRECT IF ERROR FROM THE BACKEND
      if (res?.error) {
        resolve(false);
        return;
      }
    } catch (error) {
      console.log("SEOMETHING", error);
      resolve(false);
      return;
    }

    resolve(false);
  });
};

export default isUserVerified;

export const createApolloClient = (_token: string) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined" ? true : false,
    uri: config.app.api_url,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${_token}`,
    },
  });
};
