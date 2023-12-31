import React from 'react';
import Step1 from '../../components/Forms/Step1';
import Step2 from '../../components/Forms/Step2';
import { NavLink, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { connectMetamask } from '../../utils/connectMetamask';
import { goodStremNFTABI } from '../../artifacts/GoodStreamNFT';
import axios from 'axios';

interface Modules {
    id: number;
    title: string;
    link: string;
    details: string;
}

export default function AddCourses() {
    const [step, setStep] = React.useState(1);
    const history = useNavigate();

    //author data
    const [author, setAuthor] = React.useState('');
    const [experience, setExperience] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [linkedin, setLinkedin] = React.useState('');

    //course data
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [dificulty, setDificulty] = React.useState('');
    const [duration, setDuration] = React.useState('');
    //module data
    const [modules, setModules] = React.useState<Modules[]>([]);
    const [inputTitle, setInputTitle] = React.useState('');
    const [inputLink, setInputLink] = React.useState('');
    const [inputDetails, setInputDetails] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    async function mintNFT(){
        console.log("MING NFT")
        try{
            const connection = await connectMetamask();
            const account = connection?.address;
            const provider = connection?.web3Provider;
            const signer = connection?.web3Signer;

            const nftcontract = new ethers.Contract("0x2670FD8f2328aa9311da878FAD0bD567Fc674e0F", goodStremNFTABI, signer);
            const tx = await nftcontract.functions.safeMint(account, "https://i.ibb.co/WxypJxx/nft-goodstream.png");
            await tx.wait();
            const url = `/success/${tx.hash}`;
            history(url);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddModule = () => {
        if (inputTitle.trim() !== '' && inputLink.trim() !== '' && inputDetails.trim() !== '') {
            const newModule: Modules = {
                id: Date.now(),
                title: inputTitle,
                link: inputLink,
                details: inputDetails
            };

            setModules([...modules, newModule]);
            setInputTitle('');
            setInputLink('');
            setInputDetails('');
        }
    };

    const handleDeleteModule = (id: number) => {
        setModules(modules.filter(module => module.id !== id));
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    function handleSubmit() {

        const body = {
            "author_name": author,
            "author_experience": experience,
            "email": email,
            "linkedin": linkedin,
            "title": title,
            "description": description,
            "category": category,
            "difficulty": dificulty,
            "course_duration": parseInt(duration),
            "module_title": inputTitle,
            "module_link": inputLink,
            "module_details": inputDetails
        }

        console.log(body);

        //MANDA PRO DB
        const url = 'http://localhost:3001/course';
        axios.post(url, body)
        .then(async (response: any) => {
            await mintNFT();
        })
        .catch((data: any) => {
            window.alert("Error")
            console.log(data);
        });
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
                <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
                <div className="flex mb-4">
                    <div
                        className={`w-1/2 border-r border-gray-400 ${step === 1 ? "bg-primary-color text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(1)}
                    >
                        Personal
                    </div>
                    <div
                        className={`w-1/2 ${step === 2 ? "bg-primary-color text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(2)}
                    >
                        Course
                    </div>
                </div>
                {step === 1 ?
                    <Step1
                        author={author}
                        setAuthor={setAuthor}
                        experience={experience}
                        setExperience={setExperience}
                        email={email}
                        setEmail={setEmail}
                        linkedin={linkedin}
                        setLinkedin={setLinkedin}
                    /> :
                    <Step2
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        category={category}
                        setCategory={setCategory}
                        dificulty={dificulty}
                        setDificulty={setDificulty}
                        duration={duration}
                        setDuration={setDuration}
                        modules={modules}
                        setModules={setModules}
                        inputTitle={inputTitle}
                        setInputTitle={setInputTitle}
                        inputLink={inputLink}
                        setInputLink={setInputLink}
                        inputDetails={inputDetails}
                        setInputDetails={setInputDetails}
                        handleAddModule={handleAddModule}
                        handleDeleteModule={handleDeleteModule}
                    />
                }
                <div className="flex justify-between mt-6">
                    {step > 1 && (
                        <>
                            <button
                                className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                                onClick={handleBack}
                            >
                                Back
                            </button>
                                <button
                                    className="bg-primary-color px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                                    onClick={handleSubmit}
                                >
                                    Submit

                                </button>
                        </>
                    )}
                    {step < 2 && (
                        <button
                            className="bg-primary-color px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
