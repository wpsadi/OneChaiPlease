// src/ProfilePage.jsx
"use client";
import React, {  useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import getGravatarUrl from "@/utils/generate-gravtar";
import UserCreds from "@/my-comps/users/creds";
import UsernameHover from "@/my-comps/users/username";
import HeroUser from "@/my-comps/users/hero";
import { useAuthStore } from "@/store/Auth";

const storageBucket = {
  name: "users",
}

const AltBannerAspect = {
  width: 1000,
  height: 300,
};

const PageDetails = {
  // AltBannerBaseURL: `https://picsum.photos/${AltBannerAspect.width}/${AltBannerAspect.height}.webp`,
  AltBannerBaseURL: `https://picsum.photos/seed/seedValue/${AltBannerAspect.width}/${AltBannerAspect.height}`,
};

interface BannerImage {
  background?: string;
  greyscale?: string;
  category?: string;
  time?: number | string;
  [key: string]: string | number | boolean | undefined;
}





interface Params {
  username: string;
}

const ProfilePage = ({ params }: { params: Params }) => {
  const {sessionInfo} = useAuthStore()
  const userData = sessionInfo;

  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];

  const UserDetails = {
    username: `@${params.username}` || "Unknown",
    name:userData?.user?.name,
    bio: "This is the user's bio. It can be a short description about the user.",
    email: userData?.user?.email,
    avatar: getGravatarUrl(userData?.user?.email || "X@example.com"),
    address: "#",
    phone: "#",
    about:
      "You can support me by helping me in my upcoming projects, it help me a lot. It take intense time to make long form video content and being a small creator. It is becoming more and more dificult to keep making such content ",
  };


  const GenerateBannerImageURL = (
    username: string,
    params: BannerImage = {
    },
    baseUrl = PageDetails.AltBannerBaseURL
  ): string => {

    // const [savedBannerURL,setSavedBannerURL] = useState({
    //   status:false,
    //   message:"Not available"
    // })
    // useEffect(() => {
    //   (async ()=>{
    //     const storedBanner =await loadImage(storageBucket.name,`banner@user@${username}`);
    //     if (storedBanner) {
    //       setSavedBannerURL(storedBanner)
    //   } else {
    //     const urlObject = new URL(baseUrl);
    //     Object.keys(params).forEach((key) =>
    //       urlObject.searchParams.append(key, params[key]?.toString() || "")
    //     );
    //     const url = urlObject.toString()
    //     let blob: any = await urlToImageBlob(url);
    //     if (blob instanceof Blob) {
    //       const saveResponse = await SaveImageWithBlob(
    //         storageBucket.name,
    //         `banner@user@${username}.webp`,
    //         blob
    //       );
    //     }
        
    //   }
    //   })()
    // }, [params, username,baseUrl]);
  
    // if (savedBannerURL.status) {
    //   return savedBannerURL.message
    // }
    const urlObject = new URL(baseUrl);
    Object.keys(params).forEach((key) =>
      urlObject.searchParams.append(key, params[key]?.toString() || "")
    );
  
    return (urlObject.toString()).replace("seedValue",username);
  };





  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full h-64 lg:h-96 bg-cover bg-center">
        <div
          className={`bg-black bg-opacity-50 h-full flex items-center justify-center bg-cover bg-center `}
        >
          <Image
            src={GenerateBannerImageURL(UserDetails.username)}
            alt="User"
            height={AltBannerAspect.height}
            width={AltBannerAspect.width}
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </div>
      <div className="relative -mt-16 lg:-mt-32 w-32 lg:w-48 h-32 lg:h-48 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src={UserDetails.avatar}
          alt="User"
          height={35}
          width={35}
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <div className="mt-4 text-center">
        <h2>
          <UsernameHover
            description={UserDetails.bio}
            stats={stats}
            username={UserDetails.username}
            avatar={UserDetails.avatar}
          />
        </h2>
        <p className="text-gray-600 mt-2 lg:mt-4">{UserDetails.bio}</p>
      </div>
      <div className="pt-4  hidden lg:block">
        <UserCreds stats={stats} />
      </div>
      <div>
        <HeroUser userDetail={UserDetails}/>
      </div>
      <div className="w-full max-w-4xl mt-8 p-4">
        <h3 className="text-xl lg:text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">{UserDetails.about}</p>
      </div>
      <div className="w-full max-w-4xl mt-8 p-4">
        <h3 className="text-xl lg:text-3xl font-semibold mb-4">
          Contact Information
        </h3>
       
        <p className="text-gray-700 leading-relaxed">
          Email: {UserDetails.email || "Not Found"}
        </p>
        {
          UserDetails.phone && UserDetails.phone !== "#" && (<>
          Phone: {UserDetails.phone}
          </>)
        }
          {
          UserDetails.address && UserDetails.address !== "#" && (<>
<p className="text-gray-700 leading-relaxed">
          Address: {UserDetails.address}
        </p>
          </>)
        }
        
      </div>
    </div>
  );
};



export default ProfilePage;
