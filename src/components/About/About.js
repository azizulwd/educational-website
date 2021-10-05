import React from 'react';
import './About.css';
import team1 from '../../images/team-pic-1.jpg';
import team2 from '../../images/team-pic-2.jpg';
import team3 from '../../images/team-pic-3.jpg';
import fb from '../../images/fb.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';

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

            <div className="about_us_achieve bg-dark py-5 mb-5">
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

            <div className="team_section mb-5">
                <div className="container">
                    <h1 className="fw-bold mb-5">Meet Our Specialist</h1>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="team_member text-center">
                                <img className="teamPic" src={team1} alt="" />
                                <div className="text-center mt-4">
                                    <h3 className="fw-bold">Borish Simga</h3>
                                    <p>Software Engineer</p>
                                </div>
                                <div className="social_links d-flex justify-content-center align-items-center gap-3 mt-5">
                                    <img src={fb} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="team_member text-center">
                                <img className="teamPic" src={team2} alt="" />
                                <div className="text-center mt-4">
                                    <h3 className="fw-bold">John Smit</h3>
                                    <p>Wed Apps Developer</p>
                                </div>
                                <div className="social_links d-flex justify-content-center align-items-center gap-3 mt-5">
                                    <img src={fb} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="team_member text-center">
                                <img className="teamPic" src={team3} alt="" />
                                <div className="text-center mt-4">
                                    <h3 className="fw-bold">Borish Johnson</h3>
                                    <p>Advisor</p>
                                </div>
                                <div className="social_links d-flex justify-content-center align-items-center gap-3 mt-5">
                                    <img src={fb} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;