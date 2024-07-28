"use client"
import CustomError from "@/my-comps/Error"
import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Unauthorized() {
  const {userLoggedIn} = useAuthStore()
  const session = userLoggedIn;
    const router = useRouter()
    useEffect(()=>{
        if (session == "authenticated"){
            router.push("/profile")
        }
    },[router,session])

  
    
    if (session == "loading"){
        return (
            <>
            <CustomError message={{
              text: "Loading..",
              description: "Please wait for a while...",
              code: ""
            }} button1={{
                text:"#",
                hide:true
            }}  button2={{
                text:"#",
               hide:true

            }}/>
            </>
          )
    }

    const msg = {
      text: "Unauthorized",
      description: "Sorry, but it seems that the Oauth has failed",
      code: ""
    }
    const btn1={
      text:"Retry",
      href:"/login"
    }
    const btn2={
      text:"Home",
      href:"/"
    }

    if (session =="unauthenticated"){
      return <CustomError message={msg} button1={btn1}  button2={btn2}/>
  }



    if (session == "authenticated"){
        router.push("/profile")
    }
 
  }