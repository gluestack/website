import NextAuth from "next-auth";
import { UserStatusEnum } from "../helper/isUserVerified";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      image?: string;
      status?: UserStatusEnum;
      team: {
        id: number;
        name: string;
        token: string;
        refresh_token: string;
        role?: string;
        is_single_member?: boolean;
      };
    };
  }
}
