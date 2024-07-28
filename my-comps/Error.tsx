import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface error{
    text:string
    code?:number | string
    description?:string
}

interface btn {
    text:string 
    href?:string
    hide?:boolean
    clickEvent?():void
}

function CustomError({message,button1,button2}:{
    message:error,
    button1:btn,
    button2:btn
}) {

  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-black ">{message.code || ""}</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{message.text || "Unknown Error"}</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">{message.description || "Oops! No further info is available for this Unknown occurence"}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
       
      { !button1.hide && (button1.href ? <Link prefetch={true} href={button1.href} ><Button>{button1.text || "unnammed btn 1"}</Button></Link> : <Button onClick={()=>{
        if (button1.clickEvent){
            button1.clickEvent()
        }
        else{
            console.log("No event is attached to this button1")
        }
      }}>{button1.text || "unnamed btn1"}</Button>)}
      
      {!button2.hide && (button2.text!=="#" && button2.href ? <Link prefetch={true} href={button2.href} ><Button className='bg-transparent border-solid border-2 border-black text-black hover:bg-black hover:text-white'>{button2.text || "unnammed btn 2"}</Button></Link> : <Button className='bg-transparent border-solid border-2 border-black text-black hover:bg-black hover:text-white' onClick={()=>{
        if (button2.clickEvent){
            button2.clickEvent()
        }
        else{
            console.log("No event is attached to this button2")
        }
      }}>{button2.text || "unnammed btn 2"}</Button>)}
      
  
      

      </div>
    </div>
  </main>
  )
}

export default CustomError