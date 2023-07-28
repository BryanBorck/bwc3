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
                <div>
                    <h1>Course details</h1>
                    <Link
                        to=".."
                        relative="path"
                        className="text-blue-500 hover:text-blue-800"
                    >&larr; <span>Back to all Courses</span></Link>
                    <div>
                        <img src={course.cover} alt={course.title} />
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}