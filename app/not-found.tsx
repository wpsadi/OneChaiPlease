import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

function Not_found() {
  return (
    <div>

    <section className=" container ">
        <div className="py-8 px-4  max-w-screen-xl  z-[1] lg:py-16 relative ">
        <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-black ">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
       
       <Link href="/" >
            <Button>Go Home</Button>
       </Link>
       <Link href="/dashboard">
            <Button className='bg-transparent border-solid border-2 border-black text-black hover:bg-black hover:text-white'>Dashboard</Button>
       </Link>
      

      </div>
    </div>
  </main>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
    </div>
    
  )
}

export default Not_found