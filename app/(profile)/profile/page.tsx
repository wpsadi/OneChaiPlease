"use client";
import React, { useActionState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAuthStore } from "@/store/Auth";

function UserProfile() {
  const {sessionInfo} = useAuthStore()
  const sessionData = sessionInfo;

  const PageDetails = {
    title: "OneChaiPlease",
    heading: "Account",
    description: "Personal Details and Info",
  };

  interface attachment {
    name: string;
    size: string;
    link: string;
  }

  interface SavedDataInterface {
    "Full name": string;
    "Email address": string;
    "Account Type": string;
    About: string;
    "Lifetime Fund Recieved"?: string | number
    Attachments: Array<{
      name: string;
      size: string;
      link: string;
    }>;
  }

  const savedData: SavedDataInterface & { [key: string]: any } = {
    "Full name": sessionData?.user?.name || "User not Logged In",
    "Email address": sessionData?.user?.email || "Login Please",
    "Account Type": "Creator",
    "Lifetime Fund Recieved":0,
    About: `Hey there! I am at ${PageDetails.title}`,
    Attachments: [
      {
        name: "resume_back_end_developer.pdf",
        size: "2.4mb",
        link: "#",
      },
      {
        name: "coverletter_back_end_developer.pdf",
        size: "4.5mb",
        link: "#",
      },
    ],
  };
  const saveDataKeys = Object.keys(savedData);

  return (
    <>
     <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {PageDetails.heading}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    {PageDetails.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    {saveDataKeys &&
                      saveDataKeys.map((item, index) => {
                        if (savedData[item] instanceof Array) {
                          return (
                              <div key={index+"d"} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                  {item}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <ul
                                    role="list"
                                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                  >
                                    {savedData.Attachments && savedData.Attachments.map((content,index)=>{
                                      return (
                                        <li key={index} className="flex items-center flex-wrap justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                      <div className="flex w-0 flex-1 items-center min-w-[220px]">
                                        <PaperClipIcon
                                          aria-hidden="true"
                                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2 flex-wrap">
                                          <span className="truncate font-medium">
                                            {content.name || "Nothing Here!"}
                                          </span>
                                          <span className="flex-shrink-0 text-gray-400">
                                            {content.size || "~ mb"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="ml-4 flex-shrink-0 pl-6 lg:pl-0">
                                        <Link
                                          href={content.link || "#"}
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Download
                                        </Link>
                                      </div>
                                    </li>
                                      )
                                    })}
                                    
                               
                                  </ul>
                                </dd>
                              </div>
                          );
                        }
                        return (
                          <div
                            key={index}
                            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                          >
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              {item}
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 sm:min-w-[200px] md:min-w-[650px] lg:min-w-[900px]">
                              {savedData[item]}
                            </dd>
                          </div>
                        );
                      })}
                  </dl>
                </div>
              </div>
    </>
  );
}

export default UserProfile;
