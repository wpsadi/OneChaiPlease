"use client"
import DefaultCommonLayout from "@/my-comps/defaultCommonLayout"
import CustomError from "@/my-comps/Error"
import { useAuthStore } from "@/store/Auth"
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
        <DefaultCommonLayout>
        <div className="flex justify-center items-center min-h-[80vh]">
                {children }
            </div>
        </DefaultCommonLayout>
      </div>
      </>
    )
  }