"use client";
import CustomError from "@/my-comps/Error";
import { useAuthStore } from "@/store/Auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {userLoggedIn,onBoarded} = useAuthStore()
  const session = userLoggedIn;
  const router = useRouter();



  return (
    <>
      <div>
        <section className=" container ">
          <div className="py-8 px-4  max-w-screen-xl  z-[1] lg:py-16 relative ">
            <div className="flex justify-center items-center min-h-[80vh]">
              {session == "loading" && (
                <CustomError
                  message={{
                    text: "Loading..",
                    description: "Please wait for a while...",
                    code: "",
                  }}
                  button1={{
                    text: "#",
                    hide: true,
                  }}
                  button2={{
                    text: "#",
                    hide: true,
                  }}
                />
              )}
              {session == "unauthenticated" && (
                <CustomError
                  message={{
                    text: "Login Required",
                    description:
                      "You need to login to continue",
                    code: "",
                  }}
                  button1={{
                    text: "Login",
                    href: "/login",
                  }}
                  button2={{
                    text: "Home",
                    href: "/",
                  }}
                />
              )}

{session == "authenticated" && onBoarded==true && (
                <CustomError
                  message={{
                    text: "Already Setup completed",
                    description:
                      "If you want to chnage something on your profile, go to your profile ",
                    code: "",
                  }}
                  button1={{
                    text: "Continueto edit the profile",
                    href: "/profile",
                  }}
                  button2={{
                    text: "Home",
                    href: "/",
                  }}
                />
              )}

              {
                session == "authenticated" && onBoarded==false  && children
              }
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </div>
    </>
  );
}
