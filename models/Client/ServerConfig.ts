import  { Client, Databases } from "node-appwrite"

const Sclient:Client = new Client()
    .setEndpoint(process.env.Appwrite_Endpoint as string | undefined || "") // Your API Endpoint
    .setProject(process.env.Appwrite_Project as string | undefined || "") // Your project ID
    .setKey(process.env.Appwrite_Key as string | undefined || ""); // Your secret API key


export const Sdatabase:Databases = new Databases(Sclient)

export default Sclient
