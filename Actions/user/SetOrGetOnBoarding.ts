import { Sdatabase } from "@/models/Client/ServerConfig";
import { AWdata } from "@/models/data";
import { ID, Query } from "node-appwrite";

const { onBoardingCollection, databaseName } = AWdata;

export async function SetOrGetOnBoarding(email: string) {
  try {
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
      response,
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
        response,
      };
    } catch (err) {
      return {
        status: false,
        response: "Failed to set onBoarding status. This also meanns that user is new",
        error:err
      };
    }
  }
}
