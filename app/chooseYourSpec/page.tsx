import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
     <Navbar />
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Choose Your Action </h2>
        <p className="text-gray-600 mb-6">Select among the below</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
        
        <Link href='/candidate_registration'>
          <div className="flex flex-col items-center cursor-pointer hover:bg-gray-300 p-8">
            <div className="bg-gray-100 rounded-full p-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-5.5m-4 1.118l4 2.282 4-2.282m-8 0V21m-4-8.5a9.985 9.985 0 011.53-5.5h12.94A9.985 9.985 0 0120 12.5m-8 8a9.985 9.985 0 01-4-7.5c0-2.486.894-4.746 2.379-6.5H7.621A9.984 9.984 0 004 12.5c0 4.486 2.958 8.255 7 9.5m0 0v1" />
              </svg>
            </div>
            <span className="text-gray-800">Register a Candidate</span>
          </div>
          </Link>

          <Link href='/generate_certificate'>
          <div className="flex flex-col items-center cursor-pointer hover:bg-gray-300 p-8">
            <div className="bg-gray-100 rounded-full p-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1 4V9h-1m0 0V5h1m-2 4h1v4h-1m0 4h2m4 0h3m-3 0v-1m0 1V5m0 16H7m1-3V5h8v13h-3m-1 0h-2m1-4V5h1v8m0 1h1v-1h-1" />
              </svg>
            </div>
            <span className="text-gray-800">Generate Certificate</span>
          </div>
          </Link>

          <Link href='/'>
            <div className="flex flex-col items-center cursor-pointer hover:bg-gray-300 p-8">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.121A3.5 3.5 0 016 14.5h.5a3.5 3.5 0 017 0H14a3.5 3.5 0 01.879 2.621m1.121 0V19m0 0a2.5 2.5 0 11-5 0v-1.879a2.5 2.5 0 115 0V19zM5 19v-2.379a2.5 2.5 0 115 0V19a2.5 2.5 0 11-5 0z" />
                </svg>
              </div>
              <span className="text-gray-800">Verify certificate</span>
            </div>
            </Link>
          </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Continue</button>
      </div>
    </div>
    </>

  );
}
