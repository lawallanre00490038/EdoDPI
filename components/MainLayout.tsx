"use client"

import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import { FaHome, FaInfoCircle, FaProjectDiagram , FaAngleRight, FaCheck, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import MainMenuContext from '@/app/context/MainMenuContext';
import {MenuContext} from '@/app/context/MainMenuContext';

const MainLayout = ( { children }: { children: React.ReactNode } ) => {
    const { toggleMenu } = useContext(MenuContext);

  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
        <Navbar />
        <main className=''>{children}</main>
    </div>
  )
}

export default MainLayout