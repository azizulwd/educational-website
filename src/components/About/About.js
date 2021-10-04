import React from 'react';

const About = () => {
    return (
        <div>
            <div className="join_with_us mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="about_info bg-warning px-3 py-5 rounded">
                                <h4 className="fw-bold mb-4">Work with us</h4>
                                <p className="mb-4">At HeroEducare, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                                <button className="btn btn-dark">Read More</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="about_info bg-warning px-3 py-5 rounded">
                                <h4 className="fw-bold mb-4">See our research</h4>
                                <p className="mb-4">We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                                <button className="btn btn-dark">Read More</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="about_info bg-warning px-3 py-5 rounded">
                                <h4 className="fw-bold mb-4">Read our blog</h4>
                                <p className="mb-4">Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more. We ensure that we are helping you.</p>
                                <button className="btn btn-dark">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_us_achieve bg-dark py-5">
                <div className="container text-center text-white">
                    <h2 className="fw-bold mb-3">We just keep growing</h2>
                    <p>Our global community and our course catalog get bigger every day. <br/> Check out our latest numbers as of June 2021.</p>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="milestone">
                                <h2 className="fw-bold">44M+</h2>
                                <p>Learners</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="milestone">
                                <h2 className="fw-bold">65K+</h2>
                                <p>Teachers</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="milestone">
                                <h2 className="fw-bold">135K+</h2>
                                <p>Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;