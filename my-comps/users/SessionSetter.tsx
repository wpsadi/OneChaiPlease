import { useAuthStore } from '@/store/Auth'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { CustomFields, SetOrGetOnBoarding } from "@/Actions/user/SetOrGetOnBoarding";
import { Models } from "appwrite"; // Import the specific type 'Document' from the 'Models' namespace
import { useRouter } from 'next/navigation';

function SessionSetter() {
    const {setSession,setSessionByValue,setOnBoardingValue, setOnBoardingDocID} = useAuthStore()
    const session  = useSession()
    const router = useRouter()
    useEffect(()=>{
      if(session.status == "authenticated"){
        setSession(session.data);
        if ((session.data.user) && session.data.user.email){

          SetOrGetOnBoarding(session.data.user?.email ?? "").then(data=>{

            if (data.status== true){
              setOnBoardingDocID(
                (data.response as Models.Document & CustomFields).$id
              )
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
      
    },[session,setSession,setSessionByValue,setOnBoardingValue,setOnBoardingDocID])
  return (
    <div></div>
  )
}

export default SessionSetter