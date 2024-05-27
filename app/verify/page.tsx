import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

const Verify = () => {
  return (
    <>
    <Navbar />
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-1/2 h-1/2 flex items-center justify-center'>
                <Image src='/dsnai.png' alt='verify' width={400} height={400} />
            </div>
            <div className='w-1/2 h-1/2 flex items-center justify-center'>
                <form>
                    <input type="text" placeholder='Enter your certificate number' className='w-1/2 h-10 p-2 border border-gray-300 rounded-md' />
                    <button type='submit' className='w-1/2 h-10 p-2 border border-gray-300 rounded-md'>Verify</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Verify

