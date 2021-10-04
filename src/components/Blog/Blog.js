import React from 'react';
import './blog.css';

const Blog = (props) => {
    console.log(props.blog);
    const {smMonth, image, title, description} = props.blog;
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog bg-white">
                <img className="mb-3 blogImg" src={image} alt="" />
                <div className="px-2 py-3">
                    <small className="fw-bold mb-3 d-inline-block text-warning">{smMonth}</small>
                    <h5 className="mb-3 fw-bold">{title}</h5>
                    <p>{description.slice(0, 200)}</p>
                    <button className="btn btn-dark">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;