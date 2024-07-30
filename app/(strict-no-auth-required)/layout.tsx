"use client";
import DefaultCommonLayout from "@/my-comps/defaultCommonLayout";
import CustomError from "@/my-comps/Error";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userLoggedIn } = useAuthStore();
  const session = userLoggedIn;
  const router = useRouter();

  useEffect(() => {
    if (session == "authenticated") {
      router.push("/dashboard");
    }
  }, [router, session]);

  if (session == "authenticated") {
    router.push("/dashboard");
  }

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
        {session == "authenticated" && (
          <DefaultCommonLayout>
            <div className="flex justify-center items-center min-h-[80vh]">
              {" "}
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
            </div>
          </DefaultCommonLayout>
        )}

        {session == "unauthenticated" && children}
      </div>
    </>
  );
}
