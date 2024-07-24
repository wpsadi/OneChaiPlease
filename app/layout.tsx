import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/my-comps/Navbar"
import Footer from "@/my-comps/Footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="sticky top-0 border-solid bg-gray-50 border-black border-b-2 z-[2]">
        <Navbar/>
        </div>
        <div className="min-h-screen relative z-[1]">
        {children}
        </div>
        <div className="z-[2]">
          <Footer/>
        </div>
      
      </body>
    </html>
  )
}
