import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_child">
                            <h2 className="fw-bold">HeroEducare</h2>
                            <p>Phone: 0393848394</p>
                            <p>Mail: heroeducare@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_child">
                            <h4>Company</h4>
                            <div className="d-flex flex-column">
                                <a href="#">About Us</a>
                                <a href="#">Blog</a>
                                <a href="#">Contact</a>
                                <a href="#">Become a Teacher</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_child">
                            <h4>Links</h4>
                            <div className="d-flex flex-column">
                                <a href="#">Courses</a>
                                <a href="#">Events</a>
                                <a href="#">Gallery</a>
                                <a href="#">FAQs</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_child">
                            <h4>Support</h4>
                            <div className="d-flex flex-column">
                                <a href="#">Documentation</a>
                                <a href="#">Forums</a>
                                <a href="#">Language Packs</a>
                                <a href="#">Release Status</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;