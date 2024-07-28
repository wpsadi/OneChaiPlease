import { useAuthStore } from '@/store/Auth'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function SessionSetter() {
    const {setSession} = useAuthStore()
    const session  = useSession()
    useEffect(()=>{
      if(session.status == "authenticated"){
        setSession(session.data)
      }
      
    },[session,setSession])
  return (
    <div></div>
  )
}

export default SessionSetter