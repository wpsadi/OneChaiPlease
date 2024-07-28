import { useAuthStore } from '@/store/Auth'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { CustomFields, SetOrGetOnBoarding } from "@/Actions/user/SetOrGetOnBoarding";
import { Models } from "appwrite"; // Import the specific type 'Document' from the 'Models' namespace

function SessionSetter() {
    const {setSession,setSessionByValue,setOnBoardingValue} = useAuthStore()
    const session  = useSession()
    useEffect(()=>{
      if(session.status == "authenticated"){
        setSession(session.data);
        console.log("dffgfgf")
        if ((session.data.user) && session.data.user.email){

          SetOrGetOnBoarding(session.data.user?.email ?? "").then(data=>{

            if (data.status== true){
              if ((data.response as Models.Document & CustomFields).isCompleted){
                setOnBoardingValue(true)
              }
              else{
                setOnBoardingValue( false)
              }
              
            }
            else{
              setOnBoardingValue(false)
            }
          })

        }

     
      }
      if(session.status == "unauthenticated"){
        setSessionByValue("unauthenticated")
      }
      
    },[session,setSession,setSessionByValue,setOnBoardingValue])
  return (
    <div></div>
  )
}

export default SessionSetter