import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from "../../assets/goodstream_logoWHITE.png"
import { connectMetamask } from '../../utils/connectMetamask';
import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';

export default function CourseDetails() {
    const { id } = useParams<{ id: string }>();

    const [enabled, setEnabled] = React.useState(false);

    const [course, setCourse] = React.useState({
        // TESTE
        id: id,
        title: `Course ${id} aaa`,
        description: `Course ${id} ddd description`,
        cover: 'https://picsum.photos/seed/picsum/200/300'
    });

    const rate = 0.1 * 60;

    async function handleStreaming() {
        if(!window.confirm(`Do you want to start streaming?\n You will be paying ${rate} ETH per minute`)) {
            return;
        }
        try{
            const connection = await connectMetamask();
            const provider  = connection?.web3Provider;
            const signer = connection?.web3Signer;
            const account = connection?.address;

            console.log("account", account);

            const sf = await Framework.create({
                chainId: 80001,
                provider: provider as ethers.providers.Web3Provider,
            });


            const superSigner = sf.createSigner({ signer: signer });

            const tokenPayment = await sf.loadSuperToken("fDAIx");
            let flowOp = tokenPayment.createFlow({
                sender: account as string,
                receiver: "0xe4710FCF17dfB136dd0818cC92388B94e7822570",
                flowRate: rate.toString()
            });

            await flowOp.exec(superSigner);
            setEnabled(true);
        } catch (err) {
            console.log(err);
            window.alert("Error while streaming");
        }

    }

    // MACACO
    // React.useEffect(() => {
    //     fetch(`/api/courses/${id}`)
    //         .then(response => response.json())
    //         .then(data => setCourse(data))
    // }, [id])

    return (
        <div>
            {course ? (
                <div className='flex flex-col items-start m-[5vh]'>
                    <Link
                        to=".."
                        relative="path"
                        className="text-blue-500 hover:text-blue-800"
                    >&larr;
                        <span className='p-3 text-1.5rem'>Back</span>
                    </Link>
                    <h1 className='my-[2.5vh] text-4xl text-secondary-color'>{course.title}</h1>
                    <div className='flex flex-row mb-[2.5vh] content-center'>
                        <img className='h-[2rem] w-[2rem] rounded-[100px] shadow-md' src={logo} alt="aaaa" />
                        <h1 className='leading-[2rem] ml-[10px] align-middle text-primary-color'>Bry xxx xxx</h1>
                    </div>
                    <div className='flex flex-row w-full'>
                        <div className='w-[75%]'>
                            {/* TROCAR IMG POR VIDEO DPS */}
                            
                            <div 
                            onClick={handleStreaming}
                            style={{
                                cursor: "pointer"
                            }}
                            className='w-[100%] max-h-[65vh] shadow-md rounded-[15px]' >
                                <iframe 
                                 style={{
                                    pointerEvents: enabled ? 'all': 'none',
                                    cursor: "pointer"
                                }}
                                width="100%" height="500vh" src="https://www.youtube.com/embed/X6y42QbVSp4?start=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>

                            <section className='flex mt-[3vh]'>
                                <div className='flex flex-col items-start w-2/3 p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fl text-secondary-color mb-[2vh]'>Description</h2>
                                    <p className='text-fn text-gray-400 pr-[5vw]'>{course.description}</p>
                                </div>
                                <div className='flex flex-col items-start ml-[3%] w-[30%] p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fn text-black mb-[2vh]'>About this course</h2>
                                    <ul className='text-fs text-gray-400 w-full'>
                                        <li className='py-[1vh]'>Category: Engineering</li>
                                        <div className='h-[2px] bg-[#f6f6f6]'/>
                                        <li className='py-[1vh]'>Level: Intermediary</li>
                                        <div className='h-[2px] bg-[#f6f6f6]'/>
                                        <li className='py-[1vh]'>Hours: 12</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className='flex flex-col items-start w-[25%]'>
                            <div className='ml-[3vw] w-[80%] rounded-[15px] shadow-md bg-[#fff]'>
                                <h2 className='text-fn text-black p-[2vh]'>Course Program</h2>
                                <ul>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 1</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]'/>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 2</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]'/>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 3</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]'/>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] mb-[2vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}