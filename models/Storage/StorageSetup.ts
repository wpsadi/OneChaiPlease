import { AWdata } from "@/models/data";
import {Sstorage } from "@/models/Client/ServerConfig";
import CreateUserAssetsBucket from "./Buckets/user_imagesBucket";


const {UsersBucket} = AWdata


async function getOrCreateStorages(){
  try {
    const resp = await Sstorage.getBucket(UsersBucket)
    // console.log("Storage connection available")
  } catch (error) {
    try {
      //create Buckets
      await Promise.all([
        CreateUserAssetsBucket()

      ])
      console.log("Bucket created")
    } catch (error) {
      console.log("Error creating Bucket", error)
    }
  }

  return Sstorage
}

export {getOrCreateStorages}