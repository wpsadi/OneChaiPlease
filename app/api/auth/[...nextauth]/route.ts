import { authOptions } from "@/store/authOptions";
import NextAuth from "next-auth";



// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Export the handler as GET and POST
export { handler as GET, handler as POST };
