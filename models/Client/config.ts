"use server"
import  { Client, Databases } from "node-appwrite"

const Sclient:Client = new Client()
    .setEndpoint(process.env.Appwrite_Endpoint as string || "") // Your API Endpoint
    .setProject(process.env.Appwrite_Project as string || "") // Your project ID
    .setKey(process.env.Appwrite_Key as string || ""); // Your secret API key


export const Sdatabase:Databases = new Databases(Sclient)



export default Sclient
