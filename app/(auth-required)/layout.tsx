"use client";
import DefaultCommonLayout from "@/my-comps/defaultCommonLayout";
import CustomError from "@/my-comps/Error";
import { useAuthStore } from "@/store/Auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userLoggedIn } = useAuthStore();
  const session = userLoggedIn;



  return (
    <>
      <div>
        {session == "loading" && (
          <DefaultCommonLayout>
            <div className="flex justify-center items-center min-h-[80vh]">
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
            </div>
          </DefaultCommonLayout>
        )}
        {session == "unauthenticated" && (
          <DefaultCommonLayout>
            <div className="flex justify-center items-center min-h-[80vh]">
              {" "}
              <CustomError
                message={{
                  text: "Login Required",
                  description: "You need to login to continue",
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
            </div>
          </DefaultCommonLayout>
        )}

        {session == "authenticated" && children}
      </div>
    </>
  );
}
