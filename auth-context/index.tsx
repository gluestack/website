import { gql } from "@apollo/client";
import { useSession } from "next-auth/react";
import React, { createContext, useState, useEffect } from "react";
import {
  createApolloClient,
  IUserModel,
  UserStatusEnum,
} from "../helper/isUserVerified";

export interface IAuthContextData {
  user: IUserModel | null;
  isLoading?: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthContexrProvider {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: IAuthContexrProvider) => {
  const session = useSession();
  const [user, setUser] = useState<any | null>(session?.data?.user);
  const [isLoading, setIsLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      setAuthChecked(true);
      setUser(null);
      setIsLoading(false);
    }
    if (session.status === "authenticated") {
      if (!authChecked) {
        fetchAndUpdateUserSession();
        setAuthChecked(true);
      }
    }
  }, [session.status]);

  const fetchAndUpdateUserSession = async () => {
    try {
      if (session?.data?.user.status === UserStatusEnum.DEV_PREVIEW) {
        setUser(session?.data?.user);
        setIsLoading(false);
        return;
      }

      const _u = await getUpdatedUser(session?.data?.user ?? null);

      if (_u) {
        if (_u?.status === UserStatusEnum.DEV_PREVIEW) {
          setUser(_u);
        }
      }
    } catch (error) {}

    setIsLoading(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, isLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

const AuthContextConsumer = AuthContext.Consumer;

export default AuthContextProvider;

export { AuthContextConsumer, AuthContext };

const getUpdatedUser = (_user: IUserModel | null) => {
  return new Promise<IUserModel | null>(async (resolve, reject) => {
    const token = _user?.team?.refresh_token ?? "";
    const teamId = _user?.team?.id ?? 0;

    // IF NO USER OR TEAM TOKEN IS PRESENT
    if (!_user || !token || !teamId) {
      resolve(null);
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

      let _user =
        JSON.parse(JSON.stringify(response?.data?.refreshToken?.data)) || null;

      if (!response?.data?.refreshToken?.success) {
        resolve(null);
        return;
      }

      _user = {
        ..._user,
        team: {
          ..._user.team,
          refreshToken: token,
        },
      };

      resolve(_user);
    } catch (error) {
      resolve(null);
      return;
    }

    resolve(null);
  });
};
