import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import config from "../../../config";

const getCookies = () => {
  let cookies = {
    sessionToken: {
      name: config.app.cookie_name,
      options: {
        path: "/",
        domain: config.app.cookie_domain,
      },
    },
  };

  return cookies;
};

if (!config.app.api_url) {
  throw new Error("API URL is required");
}

export const authOptions: NextAuthOptions = {
  useSecureCookies: process.env.NODE_ENV === "development" ? false : true,
  cookies: getCookies(),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: process.env.NEXT_PUBLIC_APP_NAME ?? "",
      credentials: {
        action: {
          label: "action",
          type: "text",
          required: false,
          display: "none",
        },
        accessToken: {
          label: "name",
          type: "text",
          required: true,
          display: "none",
        },
        teamId: {
          label: "team",
          type: "text",
          required: true,
          display: "none",
        },
      },

      async authorize(credentials, req) {
        let user: any = null;

        try {
          switch (credentials?.action) {
            // SIGN IN
            case "changeTeam":
              user = await changeTeam(
                credentials?.teamId,
                credentials?.accessToken
              );

              break;

            default:
              break;
          }
        } catch (error) {
          return null;
        }

        if (user?.error) {
          throw new Error(user?.error ?? "Something went wrong");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      let token: string | null = null;

      if (user && account) {
        if (account.provider === "github" || account.provider === "gitlab") {
          // ADD MUTATION TO VERIFY USER FROM THE BACKEND AND GET THE TOKEN
          // GET USER
          // CREATE TICKET IF NEW USER
          //
        } else if (account.provider === "credentials") {
          token = user?.team?.token;
          if (token) {
            account.status = user?.status;
            account.refresh_token = user?.team?.refresh_token;
            account.team = user?.team;
            return true;
          }
        }
      }

      return false;
    },
    async jwt({ token, account, profile }: any) {
      if (account) {
        token.status = account?.status;
        token.team = account?.team ?? null;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.error = token.error;
      session.user.team = token?.team;
      session.user.status = token?.status;
      return session;
    },
  },
  pages: {
    error: "/reset-password",
  },
};

export default NextAuth(authOptions);

function changeTeam(_teamId: string, _accessToken?: string) {
  const client = new ApolloClient({
    uri: config.app.api_url,
    headers: {
      authorization: `Bearer ${_accessToken}`,
    },
    cache: new InMemoryCache(),
  });

  return new Promise(async (resolve, reject) => {
    try {
      const response = await client.mutate({
        mutation: gql`
        mutation {
         refreshToken(input: {team_id: ${_teamId}}) {
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

      console.log("SIGN IN RESPONSE", response);

      let _user =
        JSON.parse(JSON.stringify(response?.data?.refreshToken?.data)) || null;

      if (!response?.data?.refreshToken?.success) {
        resolve({
          error: response?.data?.refreshToken?.message,
        });
        return;
      }

      _user = {
        ..._user,
        team: {
          ..._user.team,
          refreshToken: _accessToken,
        },
      };

      resolve(_user);
    } catch (error) {
      console.log("Erara", error);
      reject(null);
    }
  });
}
