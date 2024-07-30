
import DefaultCommonLayout from '@/my-comps/defaultCommonLayout'
import CustomError from '@/my-comps/Error'
import React from 'react'

function Not_found() {
  const msg = {
    text: "Page not found",
    description: "Sorry, we couldn't find the page you're looking for.",
    code: 404
  }
  const btn1={
    text:"Go Home",
    href:"/"
  }
  const btn2={
    text:"Dashboard",
    href:"/dashboard"
  }
  return (
    <div>
      <DefaultCommonLayout>
      <CustomError message={msg} button1={btn1}  button2={btn2}/>
      </DefaultCommonLayout>
 
    </div>
    
  )
}

export default Not_found