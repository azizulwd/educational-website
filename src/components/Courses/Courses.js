import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://azizulwd.github.io/json-data2/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return (
        <div className="container">
            <div className="row g-4">
                {
                    courses.map(course => <Course
                        key={course.time}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;