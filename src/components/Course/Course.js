import React from 'react';

const Course = (props) => {
    console.log(props.course);
    const {title, image, time, description, instructor} = props.course;
    return (
        <div className="col-lg-3 col-md-6">
            <div className="all_courses bg-white">
                <img className="mb-3 mysize" src={image} alt="" />
                <div className="p-2">
                    <h5 className="mb-3 fw-bold">{title}</h5>
                    <p>{description}</p>
                    <p className="d-flex justify-content-between align-items-center">
                        <span className="bg-success text-white py-1 px-2 rounded">{instructor}</span>
                        <span className="bg-warning text-white py-1 px-2 rounded">{time}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Course;