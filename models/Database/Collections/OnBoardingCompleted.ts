import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { Permission } from "node-appwrite";


const {onBoardingCollection,databaseName} = AWdata

// Creating the collections =
export default  async function CreateonBoardingCollection() {
    await  Sdatabase.createCollection(databaseName,onBoardingCollection,onBoardingCollection,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("onBoarded Collection Created");

      // Creating Attributes
      await Promise.all([
         Sdatabase.createEmailAttribute(databaseName, onBoardingCollection, "email", true),
         Sdatabase.createDatetimeAttribute(databaseName,onBoardingCollection,"joinedOn",true),
         Sdatabase.createBooleanAttribute(databaseName, onBoardingCollection, "isCompleted", true),
        
    ]);

    console.log("onBoarded Attributes Created");
    
}