import React from 'react';

export default function Step1(props: any) {
    return (
        <div>
            <h3 className="text-lg font-medium mb-4">Step 1 - Personal Information</h3>
            <div className='max-h-[50vh]'>

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
        </div>
    );
}