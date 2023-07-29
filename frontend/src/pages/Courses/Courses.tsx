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
    ])

    // MACACO
    // React.useEffect(() => {
    //     fetch('/api/courses')
    //         .then(response => response.json())
    //         .then(data => setCourses(data))
    // }, [])

    const coursesElements = courses.map(course => (
        <div key={course.id} className="bg-white rounded-lg shadow-md m-4 w-[30%] max-w-md min-w-[12rem]">
            <Link to={`/courses/${course.id}`}>
                <img src={course.cover} alt={course.title} className="w-full h-32 object-cover mb-4 rounded-tr-lg rounded-tl-lg" />
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
            </Link>
        </div>
    ))

    return (
        <div className='w-[100%]'>
            <h1>Courses</h1>
            <div className='flex flex-wrap justify-start'>
                {courses.length ? coursesElements : <h2>No courses found</h2>}
            </div>
        </div>
    )
}