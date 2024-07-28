"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { Navbar as Navy, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from 'next/image';
import NavbarAuthButtons from './NavbarAuthButton';
import { Button } from '@/components/ui/button';
import { useSession,signOut } from 'next-auth/react';

import { ProfileMenu } from './profileMenu';
import { useAuthStore } from '@/store/Auth';


// const LoginButtonHandler = async ()=>{

// }



function Navbar() {
  const {userLoggedIn,clearSession} = useAuthStore()
  


  
    const NavbarDetails={
    title: "OneChaiPlease",
    }

    const NavbarLinksList = [
      {
        name: "Home",
        link: "/",
        active:true,
        visible:true
      },
      {
        name: "Dashboard",
        link: "/dashboard",
        active:false,
        visible:userLoggedIn === "authenticated",
      },
    {
      name: "About",
      link: "#",
      active:false,
      visible:true,
    },
    {
      name: "Project",
      link: "#",
      active:false,
      visible:true
    }
    ]


  return (
    <>
   
    <Navy fluid rounded className=''>
      
    <Link href={"/"} prefetch={true}>
    <span className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/favicon.ico" className="mr-3" height={24} width={24} alt={`${NavbarDetails.title} Logo`} />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{NavbarDetails.title}</span>
    </span>
    </Link>
        
    {/* <NavbarBrand>
    
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{NavbarDetails.title}</span>
  </NavbarBrand> */}
  <br className='md:hidden'/>
  <div className="flex md:order-2 gap-2">


{
  userLoggedIn ==="authenticated" ? (<>
  <ProfileMenu/>
  <Button className='hidden md:inline' onClick={()=>{
    clearSession()
  }}>Logout</Button>
  </>) : <NavbarAuthButtons/>
}



    
    <NavbarToggle />
  </div>
  <NavbarCollapse>
    {NavbarLinksList && NavbarLinksList.map((navItem,index)=>{

      if (navItem.visible){
        return <Link prefetch={true} key={index} href={navItem.link} ><span className={`${navItem.active?  "text-gray-600" : "text-gray-400" }  hover:underline underline-offset-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  lg:hover:text-gray-400`} >{navItem.name}</span></Link>
      }
      return ""
      
    })}

  </NavbarCollapse>
</Navy>
    </>
  
  )
}

export default Navbar