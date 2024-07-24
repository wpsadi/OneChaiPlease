
import Link from 'next/link'
import React from 'react'
import { Navbar as Navy, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from 'next/image';
import NavbarAuthButtons from './NavbarAuthButton';


// const LoginButtonHandler = async ()=>{

// }



function Navbar() {
  
    const NavbarDetails={
    title: "OneChaiPlease",
    }

    const NavbarLinksList = [
      {
        name: "Home",
        link: "/",
        active:true
      },
    {
      name: "About",
      link: "#",
      active:false
    },
    {
      name: "Project",
      link: "#",
      active:false
    }
    ]


  return (
  <Navy fluid rounded>
    <Link href={"/"}>
    <span className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/favicon.ico" className="mr-3" height={24} width={24} alt={`${NavbarDetails.title} Logo`} />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{NavbarDetails.title}</span>
    </span>
    </Link>
        
    {/* <NavbarBrand>
    
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{NavbarDetails.title}</span>
  </NavbarBrand> */}

  <div className="flex md:order-2 gap-2">


<NavbarAuthButtons/>
    
    <NavbarToggle />
  </div>
  <NavbarCollapse>
    {NavbarLinksList && NavbarLinksList.map((navItem,index)=><Link key={index} href={navItem.link} ><span className={`${navItem.active?  "text-gray-600" : "text-gray-400" }  hover:underline underline-offset-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  lg:hover:text-gray-400`} >{navItem.name}</span></Link>)}

  </NavbarCollapse>
</Navy>
  )
}

export default Navbar