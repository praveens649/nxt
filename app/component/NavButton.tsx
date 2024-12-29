'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
 // Correct import

import React from 'react'

const DemoButton = () => {
  return (
    <div className="flex space-x-4 items-center">
      <Link href={"/About"}>
      <Button className="p-2 rounded-md bg-black hover:bg-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none">
        About
      </Button>
      </Link>
     
      <Link href={"/Watchlist"}><Button 
        className="p-2 rounded-md bg-black hover:bg-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
      >
        Watchlist
      </Button></Link> 
      {/* <!-- Login Button --> */}
      <Link href={"/Login"}>
      <Button className="p-2 rounded-md bg-black hover:bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none">
        Login
      </Button></Link>
      
    </div>
  )
}

export default DemoButton
