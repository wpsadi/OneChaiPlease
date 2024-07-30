"use client"
import { SocialLogin } from '@/my-comps/SocialLogin'
import React from 'react'
import DefaultCommonLayout from '@/my-comps/defaultCommonLayout'


function page() {
  return (
    <div>
      <DefaultCommonLayout>
      <div className='flex justify-center items-center min-h-[80vh] '><SocialLogin/></div>
      </DefaultCommonLayout>
    </div>
    
  )
}

export default page