"use server"
import { Sdatabase } from "@/models/Client/ServerConfig";
import { AWdata } from "@/models/data";
import { ID, Models, Query } from "node-appwrite";


const { onBoardingCollection, databaseName } = AWdata;



export type CustomFields = {
  isCompleted: boolean;
  email: string;
  // Add other custom fields here
};

interface Resp{
  status:boolean
  error?:Error | string | null | undefined
  response:(Models.Document & CustomFields ) | string | Models.Document
}

export async function SetOrGetOnBoarding(email: string):Promise<Resp> {
  try {
    if (email.length <0) {
      return {
        status: false,
        response: "Email field is empty",
        error: "Email is required",
      };
    }

    const response = await Sdatabase.listDocuments(
      databaseName,
      onBoardingCollection,
      [Query.limit(1), Query.equal("email", email)]
    );
    if (response.total == 0){
      throw new Error("User is New")
    }
    return {
      status: true,
      response:response.documents[0],
    };
  } catch (err) {
    try {
      const response = await Sdatabase.createDocument(
        databaseName,
        onBoardingCollection,
        ID.unique(),
        {
          email,
          isCompleted: false,
        }
      );
      return {
        status: true,
        response:response,
      };
    } catch (err) {
      if (err instanceof Error){
        return {
          status: false,
          response: "Failed to set onBoarding status. This also meanns that user is new",
          error:err
        };
      }
      return {
        status: false,
        response: "We don't the shit just happend when we the code was trying to get onBoard status",
        error: "Missing return statement",
      };

    }
  }
}
