export const app = {
         api_url:
           process?.env?.NEXT_PUBLIC_API_URL ||
           "https://api.gluestack.io//v1/graphql",
         cookie_name:
           process.env.NEXT_AUTH_COOKIE_NAME ?? "next-auth.session-token",
         cookie_domain: process.env.NEXT_AUTH_COOKIE_DOMAIN ?? ".gluestack.io",
         signin_url: process.env.NEXT_PUBLIC_SIGNIN_URL ?? "",
         next_auth_secret: process.env.NEXTAUTH_SECRET ?? "",
       };
