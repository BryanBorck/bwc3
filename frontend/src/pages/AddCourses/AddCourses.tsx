import React from 'react';

export default function AddCourses() {
    const [step, setStep] = React.useState(1);

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
    const [numModules, setNumModules] = React.useState(0);
    const [modules, setModules] = React.useState({});


    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    function handleSubmit() {
        console.log(
            author,
            experience,
            email,
            linkedin,
            title,
            description,
            category,
            dificulty,
            duration,
            modules
        )
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

// Personal Information
const Step1 = (props: any) => (
    <div>
        <h3 className="text-lg font-medium mb-4">Step 1 - Personal Information</h3>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder='Author Name'
                value={props.author}
                onChange={(e) => props.setAuthor(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="experience">
                Experience
            </label>
            <input
                type="text"
                id="experience"
                name="experience"
                placeholder='Author Experience'
                value={props.experience}
                onChange={(e) => props.setExperience(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='abc123@at.com'
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="linkedin">
                Linkedin
            </label>
            <input
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder='Ex: Linkedin/myLinkedin'
                value={props.linkedin}
                onChange={(e) => props.setLinkedin(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
    </div>
);

// Course Information
const Step2 = (props: any) => (
    <div>
        <h3 className="text-lg font-medium mb-4">Step 2 - Course Information</h3>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="title">
                Course Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder='Ex: Cool Course ;)'
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="description">
                Course Description
            </label>
            <input
                type="text"
                id="description"
                name="description"
                placeholder='Ex: 24'
                value={props.description}
                onChange={(e) => props.setDescription(e.target.value)}
                className="w-full border bg-[white] border-primary-color p-2"
            />
        </div>
        <div className='flex justify-evenly'>
            <div className="mb-4">
                <label className="block font-medium mb-2 text-gray-700" htmlFor="category">
                    Category
                </label>
                <select name="category" id="category" className="w-11/12 border bg-[white] border-primary-color p-2" value={props.category} onChange={(e) => props.setCategory(e.target.value)}>
                    <option value="">Select a Category</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2 text-gray-700" htmlFor="dificulty">
                    Dificulty Level
                </label>
                <select name="dificulty" id="dificulty" className="w-11/12 border bg-[white] border-primary-color p-2" value={props.dificulty} onChange={(e) => props.setDificulty(e.target.value)}>
                    <option value="">Select a Dificulty</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2 text-gray-700" htmlFor="duration">
                    Course Duration
                </label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    placeholder='Ex: 24'
                    value={props.duration}
                    onChange={(e) => props.setDuration(e.target.value)}
                    className="w-11/12 border bg-[white] border-primary-color p-2"
                />
            </div>
        </div>
        <div className="mb-4">
                <label className="block font-medium mb-2 text-gray-700" htmlFor="numModules">
                    Modules
                </label>
                <input
                    type="number"
                    id="numModules"
                    name="numModules"
                    placeholder='Ex: 3'
                    value={props.numModules}
                    onChange={(e) => props.setNumModules(e.target.value)}
                    className="w-full border bg-[white] border-primary-color p-2"
                />
            </div>
    </div>
);
