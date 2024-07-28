import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { Permission } from "node-appwrite";


const {profileCollection,databaseName} = AWdata

// Creating the collections =
export default  async function CreateProfileCollection() {
    await  Sdatabase.createCollection(databaseName,profileCollection,profileCollection,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Profile Collection Created");

      // Creating Attributes
      await Promise.all([

        await Sdatabase.createStringAttribute(databaseName, profileCollection, "name", 128, true),
        await Sdatabase.createStringAttribute(databaseName, profileCollection, "username", 50, true),
        await Sdatabase.createStringAttribute(databaseName, profileCollection, "stats", 128000, true),
        await Sdatabase.createEnumAttribute(databaseName,profileCollection,"type",["creator","supporter"],true),
        await Sdatabase.createUrlAttribute(databaseName,profileCollection,"bannerURL",true),
        await Sdatabase.createUrlAttribute(databaseName,profileCollection,"AvatarURL",true),
        await Sdatabase.createStringAttribute(databaseName, profileCollection, "About", 10000, true),
        await Sdatabase.createEmailAttribute(databaseName,profileCollection,"Shareable_email",true),
        await Sdatabase.createStringAttribute(databaseName, profileCollection, "Shareable_phone", 20,false,"#"),
        await Sdatabase.createStringAttribute(databaseName, profileCollection, "Shareable_address", 200,false,"#"),

    ]);

    console.log("profile Attributes Created");
    
}