import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { Permission, RelationMutate, RelationshipType } from "node-appwrite";


const {databaseName,fundingReceived} = AWdata

// Creating the collections =
export default  async function CreateFundReceivedCollection() {
    await  Sdatabase.createCollection(databaseName,fundingReceived,fundingReceived,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Fund Recieved Collection Created");

      // Creating Attributes
      await Promise.all([
        await Sdatabase.createStringAttribute(databaseName, fundingReceived, "supporter", 128, true),
        await Sdatabase.createStringAttribute(databaseName, fundingReceived, "currency", 20,true),
        await Sdatabase.createStringAttribute(databaseName, fundingReceived, "donation_amount", 50, true),
        await Sdatabase.createUrlAttribute(databaseName,fundingReceived,"image",true),
        await Sdatabase.createStringAttribute(databaseName, fundingReceived, "message", 1000,true),
        await Sdatabase.createDatetimeAttribute(databaseName,fundingReceived,"donatedOn",true)
       
    ]);

    console.log("Fund Recieved Attributes Created");
    
}