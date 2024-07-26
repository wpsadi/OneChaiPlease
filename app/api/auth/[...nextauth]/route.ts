import { Sdatabase } from "@/models/Client/config";
import { AWdata } from "@/models/data";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { ID, Query } from "node-appwrite";

const {databaseName,onBoardingCollection} = AWdata

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
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try{

        const userExists = await Sdatabase.listDocuments(databaseName,onBoardingCollection,[Query.equal("email",email as string)])
      }
      catch(e){
        const userExists = await Sdatabase.createDocument(databaseName,onBoardingCollection,ID.unique(),{
          email:email,
          isCompleted:false
        })
      }
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, user, token }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }
}
});

export { authOptions as GET, authOptions as POST };
