"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Spinner } from "flowbite-react";

const loadingWordArray = ["loading", "loading..", "loading...", "Loading","Loading.."];
interface error {
  text: string;
  code?: number | string;
  description?: string;
}

interface btn {
  text: string;
  href?: string;
  hide?: boolean;
  clickEvent?(): void;
}

function CustomError({
  message,
  button1,
  button2,
}: {
  message: error;
  button1: btn;
  button2: btn;
}) {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {loadingWordArray.includes(message.text) && (
          // <ThreeCircles
          //   visible={true}
          //   height="70"
          //   width="70"
          //   color="#6E7271"
          //   ariaLabel="three-circles-loading"
          //   wrapperStyle={{}}
          //   wrapperClass=""
          // />
          <div role="status">
          <svg aria-hidden="true" className="w-8 h-8  animate-spin text-gray-300 fill-gray-700 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
        )}
        {!loadingWordArray.includes(message.text) && (
          <>
            <p className="text-base font-semibold text-black ">
              {message.code || ""}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {message.text || "Unknown Error"}
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {message.description ||
                "Oops! No further info is available for this Unknown occurence"}
            </p>
          </>
        )}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {!button1.hide &&
            (button1.href ? (
              <Link prefetch={true} href={button1.href}>
                <Button>{button1.text || "unnammed btn 1"}</Button>
              </Link>
            ) : (
              <Button
                onClick={() => {
                  if (button1.clickEvent) {
                    button1.clickEvent();
                  } else {
                    console.log("No event is attached to this button1");
                  }
                }}
              >
                {button1.text || "unnamed btn1"}
              </Button>
            ))}

          {!button2.hide &&
            (button2.text !== "#" && button2.href ? (
              <Link prefetch={true} href={button2.href}>
                <Button className="bg-transparent border-solid border-2 border-black text-black hover:bg-black hover:text-white">
                  {button2.text || "unnammed btn 2"}
                </Button>
              </Link>
            ) : (
              <Button
                className="bg-transparent border-solid border-2 border-black text-black hover:bg-black hover:text-white"
                onClick={() => {
                  if (button2.clickEvent) {
                    button2.clickEvent();
                  } else {
                    console.log("No event is attached to this button2");
                  }
                }}
              >
                {button2.text || "unnammed btn 2"}
              </Button>
            ))}
        </div>
      </div>
    </main>
  );
}

export default CustomError;
