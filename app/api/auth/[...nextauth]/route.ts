import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: (process.env.GITHUB_ID as string) || "",
      clientSecret: (process.env.GITHUB_SECRET as string) || "",
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
    })
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ]
  
});

export { authOptions as GET, authOptions as POST };
