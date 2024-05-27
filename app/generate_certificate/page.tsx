'use client'

// Import html2pdf library
// import html2pdf from 'html2pdf.js';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Generate = () => {
    const [candidateNumber, setCandidateNumber] = useState('');
    const [certificateData, setCertificateData] = useState(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Certificate Display Code
        

        toast("Congrats! Your certificate is ready");
    
    }

    const handleDownload = () => {
        // Convert certificate data to PDF and save
        // html2pdf().from(certificateData).save('certificate.pdf');
        console.log(certificateData)
        
    }

    return (
        <>
            <Navbar />
            <div className='w-full h-screen flex items-center justify-center'>
                {certificateData ? (
                    // Display certificate if data is available
                    <div className='w-1/2 h-1/2 flex items-center justify-center'>
                        <div dangerouslySetInnerHTML={{ __html: certificateData }} />
                        <button onClick={handleDownload} className='h-10 mt-4 p-2 border border-gray-300 rounded-md hover:bg-green-400 hover:text-white'>Download PDF</button>
                    </div>
                ) : (
                    // Show form to generate certificate

                    <div className='w-1/2 h-1/2 flex items-center justify-center'>
                        <Image src='/certificate.jpg' alt='verify' width={400} height={400} />
                    </div>
                    
                )}

                <div className='w-1/2 h-1/2 flex items-center justify-center'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-xl font-bold'>Enter candidate number</h1>
                        <input type="text" value={candidateNumber} onChange={(e) => setCandidateNumber(e.target.value)} placeholder='Enter your certificate number' className='h-10 p-2 border border-gray-3000 rounded-md' />
                        <button  type='submit' className='h-10 p-2 border border-gray-300 rounded-md hover:bg-green-400 hover:text-white'>Generate</button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Generate;


        