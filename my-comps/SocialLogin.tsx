"use client"

import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaXTwitter,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";





export function SocialLogin() {
  const details = {
    title: "Ride the OAuth Wave!",
    description:
      "Ride the OAuth Wave to securely access and share your data with ease. Enjoy seamless authentication and authorization with your trusted sources!",
    items: [
      {
        name: "Google",
        link: "https://google.com",
        tag: FaGoogle,
        popular: true,
        additonalMessage:""
      },
      {
        name: "Twitter",
        link: "https://twitter",
        tag: FaXTwitter,
        popular: true,
        additonalMessage:""
      },
      {
        name: "Github",
        link: "https://github.com",
        tag: FaGithub,
        popular: false,
        additonalMessage:"Not Working"
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com",
        tag: FaLinkedin,
        popular: false,
        additonalMessage:""
      },
    ],
    additionInfo: {
      type: "info",
      icons: {
        question: FaRegCircleQuestion,
        info: IoInformationCircleOutline,
      },
      text: "Will it be secure ?",
      link: "https://google.com", // set this is # to remove the link remove the Link tag from code
    },
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {details.title}
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {details.description}
      </p>
      <ul className="my-4 space-y-3">

        {details.items &&
          details.items.map((providerInfo, index) => (
            <li key={index}>
              <div
              onClick={()=>{
                OAuthButton(providerInfo.link)
              }}
                // href={providerInfo.link}
                // target="_parent"
                className="flex items-center cursor-pointer p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <providerInfo.tag className="inline text-lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">{
                    providerInfo.name
                    }</span>
                
                {
                    providerInfo.additonalMessage !== "" &&  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    {providerInfo.additonalMessage}
                  </span>
                }
                {
                    providerInfo.popular &&  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                }
               
              </div>
            </li>
          ))}
      </ul>
      <div className="inline">
        {(details.additionInfo.type as string) &&
          (() => {
            const type = details.additionInfo.type;
            const Icon = details.additionInfo.icons[
              type as keyof typeof details.additionInfo.icons
            ] as IconType;
            return <Icon className="inline mr-2" />;
          })()}
        {details.additionInfo.link == "#" ? (
          <span className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
            {details.additionInfo.text}
          </span>
        ) : (
          <Link
            href={details.additionInfo.link || "#"}
            target="_blank"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            {details.additionInfo.text}
          </Link>
        )}
      </div>
    </div>
  );
}


const OAuthButton = (oauthUrl:string) => {
    const openOAuthWindow = () => {
  
      const width = 600;
      const height = 700;
      const left = (window.screen.width / 2) - (width / 2);
      const top = (window.screen.height / 2) - (height / 2);
  
      window.open(oauthUrl, 'OAuthWindow', `width=${width},height=${height},top=${top},left=${left}`);
    };
    openOAuthWindow();
}