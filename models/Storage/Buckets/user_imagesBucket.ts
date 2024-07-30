import { AWdata } from "@/models/data";
import { Sstorage } from "@/models/Client/ServerConfig";
import { Compression, Permission } from "node-appwrite";


export const AllowedFileExtensions = [
    'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'webp', 'svg', 'heic', 'heif', 'ico', 'jfif', 'avif', 'pdf'
  ];

const {UsersBucket} = AWdata

export default async function CreateUserAssetsBucket(){
    await Sstorage.createBucket(UsersBucket,UsersBucket,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ],false,true,50000000,[...AllowedFileExtensions],Compression.Gzip,true,true)
    console.log("User Assets Bucket Created")
}