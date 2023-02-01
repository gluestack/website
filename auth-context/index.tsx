import React, { useState, useEffect, createContext } from "react";
//import { useGetUserByEmailLazyQuery } from "../../services/__generated";
import { useGlue } from "@gluestack/glue-client-sdk-react";
import isEmpty from "lodash/isEmpty";
import { getToken } from "../utils/token";
import { UserStatusEnum } from "../helper/isUserVerified";

const AuthContext = createContext(
  ([] as unknown) as [any, boolean, (_user: any) => void]
);

const AuthContextConsumer = AuthContext.Consumer;

interface IAuthContextProvider {
  children: React.ReactNode;
}

interface IUser {
  email: string;
  id: number;
  name: string;
  status: UserStatusEnum;
}

const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { glue } = useGlue(["AUTH:*"]);

  useEffect(() => {
    checkIFUserIsSignedIn();
  }, []);

  const checkIFUserIsSignedIn = async () => {
    setIsLoading(true);
    try {
      const token = await getToken("token");
      const refreshToken = await getToken("refreshToken");

      console.log("TOKENS", token, refreshToken);

      if (!token || !refreshToken) {
        throw "Token does not exists";
      }

      // TOKEN SET
      glue.auth.setAuthToken(token);

      const user = await glue.auth.getUser();

      console.log("USER", user);

      if (isEmpty(user) || user?.status === UserStatusEnum.ON_WAITLIST) {
        throw "User does not exists";
      }

      setUser(user);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={[user, isLoading, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextConsumer, AuthContextProvider };
