import React from 'react';
import { NavLink } from "react-router-dom"
import logoApp from "../../assets/goodstream_logoWHITEv2.png"

export default function Home() {

    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] flex flex-row overflow-hidden'>
            <main className='flex flex-row w-[100%] overflow-y-scroll overflow-hidden'>
                <div className="w-[50vw] h-[100vh] bg-middle bg-[url('././assets/goodstream_bkg.png')]">
                    <div className='fixed w-[50vw] h-[100%] bg-gradient-to-r from-[rgba(93,212,170,0.65)] to-[rgba(0,112,127,0.7)]'>
                        <div className='grid grid-col justify-center'>
                            <img className="w-96 h-auto mt-[8vh]" src={logoApp} alt="..." />
                        </div>
                        <div className='grid grid-col justify-center text-center text-xl text-[white] font-regular ml-[10%] w-[80%] h-[13vh] p-[2vh]'>
                            Good Stream is a platform to learn in video courses, and all money paid is donated for charity.
                        </div>
                        <div className='grid grid-col justify-center'>
                            <NavLink className='w-[25vw] mt-[5vh] text-center text-2xl px-5 py-2 bg-secondary-color text-white hover:bg-[white] hover:text-primary-color rounded-full cursor-pointer transition duration-1000 ease-in-out' to="/courses">Explore now</NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-[50vw] h-[100vh] bg-[url('././assets/bkg_liquefy.png')]">
                    <div className='fixed w-[50vw] h-[100%] bg-gradient-to-r from-[rgba(214,214,214,0.8)] to-[rgba(255,255,255,0.8)]'>
                        <div className='grid grid-col justify-center text-center text-3xl text-primary-color font-bold ml-[10%] w-[80%] h-[13vh] p-[2vh] mt-[10vh]'>
                            How does it work?
                        </div>
                        <div className='flex flex-row justify-evenly w-full mt-[2vh]'>
                            <div className='grid grid-col justify-center w-[22vw] h-[60vh] text-secondary-color shadow-md rounded-[15px] bg-[white] hover:bg-[#f6f6f6]'>
                                <div className='grid grid-col justify-center w-full mt-[10vh]'>
                                    <h1 className='text-xl text-primary-color font-bold'>I have experiences to share</h1>
                                </div>
                                <div className='grid grid-col justify-center w-[100%] px-[10%]'>
                                    <p className='text-gray-600 text-center font-bold'>An option to donate time even without money</p>
                                </div>
                                <div className='grid grid-col justify-center w-[100%] px-[10%]'>
                                    <p className='text-gray-600 text-center italic font-light'>You can create a video course and share your experience to impact people and leverage donations</p>
                                </div>
                                <div className='grid grid-col justify-center w-[100%]'>
                                    <NavLink className='w-[18vw] h-[6vh] text-center text-xl px-5 py-2 bg-secondary-color text-white hover:bg-primary-color rounded-full cursor-pointer transition duration-1000 ease-in-out' to="/courses">Contribute</NavLink>
                                </div>
                            </div>
                            <div className='grid grid-col justify-center w-[22vw] h-[60vh] text-secondary-color shadow-md rounded-[15px] bg-[white] hover:bg-[#f6f6f6]'>
                                <div className='grid grid-col justify-center w-full mt-[10vh]'>
                                    <h1 className='text-xl text-primary-color font-bold'>I want to learn and donate</h1>
                                </div>
                                <div className='grid grid-col justify-center w-[100%] px-[10%]'>
                                    <p className='text-gray-600 text-center font-bold'>You can donate and learn experiences from experts</p>
                                </div>
                                <div className='grid grid-col justify-center w-[100%] px-[10%]'>
                                    <p className='text-gray-600 text-center italic font-light'>You can choose one course to learn more, and your payment will be converted to a donation</p>
                                </div>
                                <div className='grid grid-col justify-center w-[100%]'>
                                    <NavLink className='w-[18vw] h-[6vh] text-center text-xl px-5 py-2 bg-secondary-color text-white hover:bg-primary-color rounded-full cursor-pointer transition duration-1000 ease-in-out' to="/courses">Explore</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}