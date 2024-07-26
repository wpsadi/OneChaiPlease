import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import DonateUser from './donate'

function HeroUser({userDetail}:{
    userDetail: any
}) {
    const topDonations=[
        {
            supporter:"Aditya",
            amount:"250.00$",
            message:"Good work"
        }
    ]



  return (
    <section>
    <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex flex-wrap flex-row justify-center ">
        <div className="mr-auto place-self-center lg:col-span-7
        flex flex-row gap-12 flex-wrap justify-center">
            <h3 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-lg xl:text-2xl dark:text-white">Top Supporters</h3>
            <Table className='min-[200px]'>
  <TableCaption>Top 10 Highest Donation Fans like you sent to <span className='font-bold text-lg'>{userDetail.username || "@~"}</span></TableCaption>
  <TableHeader className='text-lg'>
    <TableRow>
      <TableHead >Supporter</TableHead>
      <TableHead></TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="text-right">Message</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='text-md'>
  {
        topDonations && topDonations.map((donation,index)=><TableRow key={index}>
        <TableCell className="font-medium">{donation.supporter}</TableCell>
        <TableCell className='text-center'>donated</TableCell>
        <TableCell className="text-right underline">{donation.amount}</TableCell>
        <TableCell className="text-right font-bold text-lg">{donation.message}</TableCell>
      </TableRow>)}
  </TableBody>
</Table>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
        <DonateUser UserDetails={userDetail}/>
        </div>                
    </div>
</section>
  )
}

export default HeroUser