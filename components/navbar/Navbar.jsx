import React, { useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import './_navbar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from '@clerk/nextjs';
import GetUser from '../../helpers/GetUser';
import { MenuContext } from '@/app/context/MainMenuContext';


const  Navbar =  () => {

  // const { target, open } = useContext(MenuContext);

  return (
  <nav className='w-screen max-h-[70px] p-4'>
    <div className='between'>
      <div>
        <Image src='/dsnai.png' width={50} height={50} />
      </div>

      <div className='left_nav'>
        <ul className='flex'>
        <Link href='/'><Button variant='secondary'>Home</Button></Link>
        <Link href='/candidate_registration'><Button variant='link' className='text-sm cursor-pointer'>Register a Candidate</Button></Link>
        <Link href='/generate_certificate'><Button variant='link' className='text-sm cursor-pointer'>Generate Certificate</Button></Link>
        <Link href='/verify'><Button variant='link' className='text-sm cursor-pointer'>Verify certificate</Button></Link>
        </ul>
        
      </div>
      
      <div className='flex gap-4'>
        <UserButton  className="ml-8"/> 
        <DehazeIcon className='hide_hambugger cursor-pointer'/>
      </div>
      
    </div>
  </nav>
  )
}

export default Navbar;