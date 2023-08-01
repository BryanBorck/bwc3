import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from "../../assets/goodstream_logoWHITE.png"
import { connectMetamask } from '../../utils/connectMetamask';
import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';
import axios from 'axios';

export default function CourseDetails() {
    const { id } = useParams<{ id: string }>();

    const [enabled, setEnabled] = React.useState(false);
    const [money, setMoney] = React.useState(0);

    // const [course, setCourse] = React.useState({
    //     // TESTE
    //     id: id,
    //     title: `Course ${id} aaa`,
    //     description: `Course ${id} ddd description`,
    //     cover: 'https://picsum.photos/seed/picsum/200/300'
    // });

    const [course, setCourse] = React.useState<{
        id: number,
        author_name: string,
        description: string,
        category: string,
        difficulty: string,
        course_duration: number,
        module_title: string,
        module_link: string,
        module_details: string,
    }>();

    React.useEffect(() => {
        const url = `http://localhost:3001/courses/${id}`
        axios.get(url).then(response => {
            const tmp = {
                id: response.data.id,
                author_name: response.data.author_name,
                description: response.data.description,
                category: response.data.category,
                difficulty: response.data.difficulty,
                course_duration: response.data.course_duration,
                module_title: response.data.module_title,
                module_link: response.data.module_link,
                module_details: response.data.module_details,
            };

            setCourse({...tmp});
        })
    }, [id])


    let rate = 1000000000000000;
    const ratePrint = 0.1

    async function handleStreaming() {
        if (!window.confirm(`Do you want to start streaming?\n You will be paying ${ratePrint} fDAIx per minute`)) {
            return;
        }
        try {
            const connection = await connectMetamask();
            const provider = connection?.web3Provider;
            const signer = connection?.web3Signer;
            const account = connection?.address;

            console.log("account", account);

            const sf = await Framework.create({
                chainId: 80001,
                provider: provider as ethers.providers.Web3Provider,
            });


            const superSigner = sf.createSigner({ signer: signer });

            const tokenPayment = await sf.loadSuperToken("fDAIx");
            let flowOp = null;
            try {
                let flowOp = tokenPayment.createFlow({
                    sender: account as string,
                    receiver: "0xab53369e91dcFC275744DC0A30BD3E363B2785e0",
                    flowRate: rate.toString()
                });


                await flowOp.exec(superSigner);
            } catch {
                console.log("Flow already exists");
                let flowOp = tokenPayment.updateFlow({
                    sender: account as string,
                    receiver: "0xab53369e91dcFC275744DC0A30BD3E363B2785e0",
                    flowRate: rate.toString()
                });
                await flowOp.exec(superSigner);
            }
            setEnabled(true);
            setInterval(() => {
                setMoney(money => money + ratePrint / 6000);
            }, 10);
        } catch (err) {
            console.log(err);
            window.alert("Error while streaming");
        }
    }

    async function deleteStreaming(event:any) {
        event.stopPropagation();
        try {
            const connection = await connectMetamask();
            const provider = connection?.web3Provider;
            const signer = connection?.web3Signer;
            const account = connection?.address;

            const sf = await Framework.create({
                chainId: 80001,
                provider: provider as ethers.providers.Web3Provider,
            });


            const superSigner = sf.createSigner({ signer: signer });
            const tokenPayment = await sf.loadSuperToken("fDAIx");
            let flowOp = tokenPayment.deleteFlow({
                sender: account as string,
                receiver: "0xab53369e91dcFC275744DC0A30BD3E363B2785e0"
            });

            await flowOp.exec(superSigner);
            setEnabled(false);
        } catch (err) {
            console.log(err);
            window.alert("Error while deleting stream");
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
                    <h1 className='my-[2.5vh] text-4xl text-secondary-color'>{course.module_title}</h1>
                    <div className='flex flex-row mb-[2.5vh] content-center'>
                        <img className='h-[2rem] w-[2rem] rounded-[100px] shadow-md' src={logo} alt="aaaa" />
                        <h1 className='leading-[2rem] ml-[10px] align-middle text-primary-color'>{course.author_name}</h1>
                    </div>
                    <div className='flex flex-row w-full'>
                        <div className='w-[75%]'>
                            {/* TROCAR IMG POR VIDEO DPS */}

                            <div
                                onClick={handleStreaming}
                                style={{
                                    cursor: "pointer"
                                }}
                                className='w-[100%] max-h-[65vh] shadow-md rounded-[15px] relative' >
                                <iframe
                                    style={{
                                        pointerEvents: enabled ? 'all' : 'none',
                                        cursor: "pointer"
                                    }}
                                    width="100%" height="500vh" src={course.module_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                <div className='flex w-[100%] justify-between p-2 absolute bottom-1 items-center'>
                                    <p className='bg-white bg-opacity-25 py-1 px-2 rounded'>Amount paid: {Number(money).toFixed(4)}</p>
                                    <button onClick={(event) => deleteStreaming(event)} className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500'>Delete Stream</button>
                                </div>
                            </div>

                            <section className='flex mt-[3vh]'>
                                <div className='flex flex-col items-start w-2/3 p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fl text-secondary-color mb-[2vh]'>Description</h2>
                                    <p className='text-fn text-gray-400 pr-[5vw]'>{course.description}</p>
                                </div>
                                <div className='flex flex-col items-start ml-[3%] w-[30%] p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fn text-black mb-[2vh]'>About this course</h2>
                                    <ul className='text-fs text-gray-400 w-full'>
                                        <li className='py-[1vh]'>Category: {course.category}</li>
                                        <div className='h-[2px] bg-[#f6f6f6]' />
                                        <li className='py-[1vh]'>Level: {course.difficulty}</li>
                                        <div className='h-[2px] bg-[#f6f6f6]' />
                                        <li className='py-[1vh]'>Hours: {course.course_duration}</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className='flex flex-col items-start w-[25%]'>
                            <div className='ml-[3vw] w-[80%] rounded-[15px] shadow-md bg-[#fff]'>
                                <h2 className='text-fn text-black p-[2vh]'>Course Program</h2>
                                <ul>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 1</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 2</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#5c5050] cursor-pointer transition duration-600'>Modulo 3</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
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