import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
    const [courses, setCourses] = React.useState([
        // TESTE
        {
            id: 1,
            title: 'Course 1',
            description: 'Course 1 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 2,
            title: 'Course 2',
            description: 'Course 2 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 3,
            title: 'Course 3',
            description: 'Course 3 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 4,
            title: 'Course 4',
            description: 'Course 4 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 5,
            title: 'Course 5',
            description: 'Course 5 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 6,
            title: 'Course 6',
            description: 'Course 6 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 7,
            title: 'Course 7',
            description: 'Course 7 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
    ])

    // MACACO
    // React.useEffect(() => {
    //     fetch('/api/courses')
    //         .then(response => response.json())
    //         .then(data => setCourses(data))
    // }, [])

    const coursesElements = courses.map(course => (
        <div key={course.id} className="bg-white rounded-lg shadow-md m-[2vh] w-[30%] max-w-md min-w-[12rem] hover:bg-[#f6f6f6] transition duration-600 ease-in-out">
            <Link to={`/courses/${course.id}`}>
                <img src={course.cover} alt={course.title} className="w-full h-[20vh] object-cover mb-[2vh] rounded-tr-lg rounded-tl-lg" />
                <h2 className="m-[1.5vh] text-sencondary-color text-fl font-semibold ">{course.title}</h2>
                <p className="text-gray-600 text-fs m-[2vh]">{course.description}</p>
            </Link>
        </div>
    ))

    return (
        <div className='w-[100%]'>
            <h1 className="text-4xl ml-[5vh] mt-[3vh] font-semibold text-primary-color">Courses</h1>
            <div className='ml-[3vh] mt-[3vh] flex flex-wrap justify-start'>
                {courses.length ? coursesElements : <h2>No courses found</h2>}
            </div>
        </div>
    )
}