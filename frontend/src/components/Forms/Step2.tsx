import React from 'react';

// interface Modules {
//     id: number;
//     title: string;
//     link: string;
//     details: string;
// }

export default function Step2(props: any) {

    // const [modules, setModules] = React.useState<Modules[]>([]);
    // const [inputTitle, setInputTitle] = React.useState('');
    // const [inputLink, setInputLink] = React.useState('');
    // const [inputDetails, setInputDetails] = React.useState('');

    // const handleAddModule = () => {
    //     if (inputTitle.trim() !== '' && inputLink.trim() !== '' && inputDetails.trim() !== '') {
    //         const newModule: Modules = {
    //             id: Date.now(),
    //             title: inputTitle,
    //             link: inputLink,
    //             details: inputDetails
    //         };

    //         setModules([...modules, newModule]);
    //         setInputTitle('');
    //         setInputLink('');
    //         setInputDetails('');
    //     }
    // };

    // const handleDeleteModule = (id: number) => {
    //     setModules(modules.filter(module => module.id !== id));
    // };

    return (
        <div>
            <h3 className="text-lg font-medium mb-4">Step 2 - Course Information</h3>
            <div className='max-h-[50vh] overflow-y-scroll pr-2'>
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

                <p className="block font-medium mb-2 text-gray-700 border-t-2 pt-2">
                    Modules Section
                </p>

                <div className="flex flex-col p-4 border mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="moduleTitle">
                        Module Title
                    </label>
                    <input
                        type="text"
                        id='moduleTitle'
                        name='moduleTitle'
                        value={props.inputTitle}
                        onChange={(e) => props.setInputTitle(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="Add a new module..."
                    />
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="link">
                        Link
                    </label>
                    <input
                        type="text"
                        id='link'
                        name='link'
                        value={props.inputLink}
                        onChange={(e) => props.setInputLink(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="add a link..."
                    />
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="Details">
                        Module Details
                    </label>
                    <input
                        type="text"
                        id='Details'
                        name='Details'
                        value={props.inputDetails}
                        onChange={(e) => props.setInputDetails(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="Add module detail..."
                    />
                    <button
                        onClick={props.handleAddModule}
                        className="bg-primary-color text-white px-4 hover:bg-secondary-color focus:outline-none"
                    >
                        Add Module
                    </button>
                </div>
                <ul className="space-y-2">
                    {props.modules.map((module:any) => (
                        <li
                            key={module.id}
                            className='flex items-center bg-primary-color p-3 rounded-md text-white '
                        >
                            <span className="flex-grow">{`Title: ${module.title}`}</span>
                            <button
                                onClick={() => props.handleDeleteModule(module.id)}
                                className="text-red-500 hover:text-red-600 ml-2 focus:outline-none"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}