import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { Permission, RelationMutate, RelationshipType } from "node-appwrite";


const {userCollection,databaseName,profileCollection,onBoardingCollection,fundingReceived,donationCollection} = AWdata

// Creating the collections =
export default  async function CreateUserCollection() {
    await  Sdatabase.createCollection(databaseName,userCollection,userCollection,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("User Collection Created");

      // Creating Attributes
      await Promise.all([
        await Sdatabase.createEmailAttribute(databaseName, userCollection, "email", true),
        await Sdatabase.createStringAttribute(databaseName, userCollection, "name", 128, true),
        await Sdatabase.createStringAttribute(databaseName, userCollection, "username", 50, true),
        await Sdatabase.createEnumAttribute(databaseName,userCollection,"type",["creator","supporter"],true),
        await Sdatabase.createUrlAttribute(databaseName,userCollection,"image",true),
        await Sdatabase.createStringAttribute(databaseName, userCollection, "Country", 20,true),
        await Sdatabase.createDatetimeAttribute(databaseName,userCollection,"joinedOn",true),
        await Sdatabase.createRelationshipAttribute(databaseName,userCollection,fundingReceived,RelationshipType.ManyToOne,true,"funds",RelationMutate.Restrict),
        await Sdatabase.createRelationshipAttribute(databaseName,userCollection,donationCollection,RelationshipType.OneToMany,true,"donations",RelationMutate.Restrict),
        await Sdatabase.createRelationshipAttribute(databaseName,userCollection,onBoardingCollection,RelationshipType.OneToOne,true,"onBoarding",RelationMutate.Cascade),
        await Sdatabase.createRelationshipAttribute(databaseName,userCollection,profileCollection,RelationshipType.OneToOne,true,"profile",RelationMutate.Cascade)
    ]);

    console.log("User Attributes Created");
    
}


