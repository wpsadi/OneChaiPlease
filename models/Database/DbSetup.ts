import { AWdata } from "@/models/data";
import { Sdatabase } from "@/models/Client/config";
import CreateFundReceivedCollection from "./Collections/FundingRecieved";
import CreateProfileCollection from "./Collections/ProfileCollection";
import CreateUserCollection from "./Collections/UsersCollection";
import CreatedonationCollection from "./Collections/DonationCollection";
import CreateonBoardingCollection from "./Collections/OnBoardingCompleted";

const {databaseName} = AWdata

const CreateDatabase = async () => {
  const result = await Sdatabase.create(
    databaseName, // databaseId
    databaseName, // name
  );
};

async function getOrCreateDB(){
  try {
    await Sdatabase.get(databaseName)
    console.log("Database connection available")
  } catch (error) {
    try {
      await CreateDatabase()
      console.log("database created")
      //create collections
      await Promise.all([
        CreateFundReceivedCollection(),
        CreateProfileCollection(),
        CreateUserCollection(),
        CreatedonationCollection(),
        CreateonBoardingCollection()

      ])
      console.log("Collection created")
      console.log("Database connected")
    } catch (error) {
      console.log("Error creating databases or collection", error)
    }
  }

  return Sdatabase
}

export {getOrCreateDB}