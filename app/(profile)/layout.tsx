"use client"
import CustomError from "@/my-comps/Error"
import { useAuthStore } from "@/store/Auth"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Layout({ children }:{children:React.ReactNode}) {
    // const {session} = useAuthStore()
const {userLoggedIn} = useAuthStore()
const session = userLoggedIn;
    const router = useRouter()
    useEffect(()=>{
        if (session == "unauthenticated"){
            router.push("/login")
        }
        
    },[router,session])

  

    const msg = {
      text: "Please login to continue",
      description: "Sorry, we couldn't load the page you're looking for.",
      code: ""
    }
    const btn1={
      text:"Login",
      href:"/login"
    }
    const btn2={
      text:"Retry",
      href:"/profile"
    }

    if (!session){
      return <CustomError message={msg} button1={btn1}  button2={btn2}/>
  }



    return (
      <>

<div>
        <section className=" container ">
          <div className="py-8 px-4  max-w-screen-xl  z-[1] lg:py-16 relative ">
            <div className="flex justify-center items-center min-h-[80vh]">
                {children }
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </div>
      </>
    )
  }