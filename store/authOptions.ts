import { SetOrGetOnBoarding } from "@/Actions/user/SetOrGetOnBoarding";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { useAuthStore } from "./Auth";


export const authOptions = {

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string || "",
      clientSecret: process.env.GITHUB_SECRET as string || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // Uncomment and configure if you want to add Email provider
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user }: { user: { email?: string | null } }) {
      if (user.email) {
        const response = await SetOrGetOnBoarding(user.email);

        if (response.status) {
          return true;
        }
        return "/unauthorized";
      }
      return "/unauthorized";
    }
  }
};
