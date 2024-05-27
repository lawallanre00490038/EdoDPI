"use client"


import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import AlertDialogSlide from '@/modals/StudentId';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CandidateRegistration = () => {
    const [formData, setFormData] = useState({
        State: '',
        CandidateName: '',
        CandidateSchool: '',
        CandidateNo_: '',
        Score: ''
    });
    const [candidateId, setCandidateId] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
        // try {
        //     const response = await fetch('/api/candidate_registration', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({...formData, Score: Number(formData.Score)})
        //     });

        //     if (!response.ok) {
        //         const errorData = await response.json();

        //         console.error('Response error data:', errorData);
        //         toast("Woops something went wrong!");
        //         throw new Error('Failed to register candidate');
        //     }

        //     const responseData = await response.json();

        //       //Check the id attribute of reponse data
        //     console.log('Response data:', responseData.message);
        //     alert('Candidate registered successfully');
        //     setOpenModal(!openModal)
        //     setCandidateId(responseData.message.osid)
        //     setFormData({
        //         State: '',
        //         CandidateName: '',
        //         CandidateSchool: '',
        //         CandidateNo_: '',
        //         Score: ''
        //     });

            
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert(error instanceof Error ? error.message : String(error));
        // }
    };

    return (
        <>
        <Navbar />
        {candidateId && <AlertDialogSlide openModal={openModal} handleClose={() => setOpenModal(false)} studentId={candidateId}/>}
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Register a Candidate</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-left">State</label>
                            <input
                                type="text"
                                name="State"
                                value={formData.State}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left">Name</label>
                            <input
                                type="text"
                                name="CandidateName"
                                value={formData.CandidateName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left">School</label>
                            <input
                                type="text"
                                name="CandidateSchool"
                                value={formData.CandidateSchool}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left">Number</label>
                            <input
                                type="text"
                                name="CandidateNo_"
                                value={formData.CandidateNo_}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left">Score</label>
                            <input
                                type="number"
                                name="Score"
                                value={formData.Score}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default CandidateRegistration;
                       