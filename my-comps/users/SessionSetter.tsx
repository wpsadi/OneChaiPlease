import { useAuthStore } from '@/store/Auth'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function SessionSetter() {
    const {setSession,setSessionByValue} = useAuthStore()
    const session  = useSession()
    useEffect(()=>{
      if(session.status == "authenticated"){
        setSession(session.data)
      }
      if(session.status == "unauthenticated"){
        setSessionByValue("unauthenticated")
      }
      
    },[session,setSession,setSessionByValue])
  return (
    <div></div>
  )
}

export default SessionSetter