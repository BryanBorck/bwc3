import React from 'react';
import { NavLink } from "react-router-dom"
import logoLine from "../../assets/goodstream_lineWHITE.png"

export default function Info() {

    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] flex flex-row overflow-hidden'>
            <div className="fixed w-full h-[100vh] bg-[url('././assets/handshake_bw.png')] overflow-hidden">
            </div>
            <main className='relative w-[100%] overflow-y-scroll overflow-hidden'>
                <div className=" fixed w-full h-[10vh]  bg-middle bg-primary-color">
                    <div className='flex flex-row justify-center'>
                        <img className="w-48 h-auto mt-[2vh]" src={logoLine} alt="..." />
                    </div>
                </div>
                <div className='grid grid-col justify-center'>
                    <NavLink className='w-[25vw] mt-[70vh] text-center text-2xl px-5 py-2 bg-primary-color hover:bg-secondary-color text-white rounded-full cursor-pointer transition duration-600 ease-in-out' to="/courses">Comece agora</NavLink>
                </div>
                <div className='grid grid-col justify-center text-xl text-[white] font-bold w-full h-[13vh] mt-[5vh] p-[2vh]'>
                    Good Stream is a platform to learn in video courses, and all money paid is donated for charity.
                </div>
            </main>
        </div>
    )
}