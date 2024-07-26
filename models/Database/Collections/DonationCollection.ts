import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/config";
import { Permission, RelationMutate, RelationshipType } from "node-appwrite";


const {databaseName,profileCollection,donationCollection} = AWdata

// Creating the collections =
export default  async function CreatedonationCollection() {
    await  Sdatabase.createCollection(databaseName,donationCollection,donationCollection,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Donation Collection Created");

      // Creating Attributes
      await Promise.all([
        Sdatabase.createStringAttribute(databaseName, donationCollection, "supporter", 128, true),
        Sdatabase.createStringAttribute(databaseName, donationCollection, "currency", 20,true),
        Sdatabase.createStringAttribute(databaseName, donationCollection, "donation_amount", 50, true),
        Sdatabase.createUrlAttribute(databaseName,donationCollection,"image",true),
        Sdatabase.createStringAttribute(databaseName, donationCollection, "message", 1000,true),
        Sdatabase.createDatetimeAttribute(databaseName,donationCollection,"donatedOn",true)
       
    ]);

    console.log("Donation Attributes Created");
    
}