import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CourseDetails() {
    const { id } = useParams<{ id: string }>()
    const [course, setCourse] = React.useState({
        // TESTE
        id: id,
        title: `Course ${id} aaa`,
        description: `Course ${id} ddd description`,
        cover: 'https://picsum.photos/seed/picsum/200/300'
    })

    // MACACO
    // React.useEffect(() => {
    //     fetch(`/api/courses/${id}`)
    //         .then(response => response.json())
    //         .then(data => setCourse(data))
    // }, [id])

    return (
        <div>
            {course ? (
                <div className='flex flex-col items-start p-4'>
                    <Link
                        to=".."
                        relative="path"
                        className="text-blue-500 hover:text-blue-800"
                    >&larr;
                        <span>Back</span>
                    </Link>
                    <h1 className='m-2'>{course.title}</h1>
                    <div className='w-[100%]'>
                        {/* TROCAR IMG POR VIDEO DPS */}
                        <img src={course.cover} alt={course.title} className='w-[100%]  max-h-96' />
                        <section className='flex'>
                            <div className='flex flex-col items-start w-2/3'>
                                <h2>Description</h2>
                                <p>{course.description}</p>
                            </div>
                            <div className='flex flex-col items-start w-1/3'>
                                <h2>Items List</h2>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}