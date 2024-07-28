"use client";
import CustomError from "@/my-comps/Error";
import { useAuthStore } from "@/store/Auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {userLoggedIn} = useAuthStore()
  const session = userLoggedIn;
  const router = useRouter();

  // const nextPage = "/profile";
  // useEffect(() => {
  // }, [router, session]);

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
              {session == "authenticated" && (
                <CustomError
                  message={{
                    text: "Unexpected",
                    description:
                      "Normally, this error would trigger when a page is marked for No Logged in users",
                    code: "",
                  }}
                  button1={{
                    text: "Dashboard",
                    href: "/dashboard",
                  }}
                  button2={{
                    text: "Home",
                    href: "/",
                  }}
                />
              )}

              {
                session == "unauthenticated" && children
              }
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </div>
    </>
  );
}
