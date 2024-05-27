"use client"
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

import Link from "next/link";

import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
    <Navbar />
    <main className='flex  h-fit flex-col items-center justify-center relative'>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-black md:text-6xl'>Generate & Verify Certificate</h1>
            <h2 className='text-md md:text-2xl'>Verify the certificate here</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>Edo state certificate and verification platform</p>
          <div className='w-full flex items-center justify-center md:justify-start'>
            <Link href='/chooseYourSpec' className='p-4 text-sm font-bold sm:text-base text-white rounded bg-blue-500 hover:bg-blue-800 hover:text-white transition-colors'>Get Started Now</Link>
          </div>
        </div>

        <div className='full overflow-hidden'>
          <Image src="/certified.jpg" 
          alt="certified"
          width={400}
          height={400}
          />
        </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        
       
      </section>

    </main>
    </div>
  );
}
