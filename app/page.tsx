import { ThreeDCardDemo } from "@/aceternity/3dcard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const threeDCardDetails = {
    bigHeading:"WELCOME",
    description:"A website to fund your projects by allowing them to send donations to you",
    imageURL:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons:{
        buttonLeft:{
            text:"Login",
            link:"/login"
        },
        buttonRight:{
            text:"Sign Up",
            link:"/signup"
    }}
  }
  const HomeDetails = {
    title:"OneChaiPlease"
  }
  return (
    <div>

    <section className="bg-white container ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center z-[1] lg:py-16 relative">
        
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Make some help come to you</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at {HomeDetails.title} we focus on strengthing the bond betweeen a creator and his audience.</p>
            {/* <ThreeDCardDemo CardDetails={threeDCardDetails}/> */}
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
    </div>
  );
}
