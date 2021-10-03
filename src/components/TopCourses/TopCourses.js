import React from 'react';
import './TopCourses.css';

const TopCourses = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4 fw-bold">Top Courses</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="top_courses bg-white">
                        <img className="mb-3 mysize" src="http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1508152857/Python-For-Finance_ubjzcp.png" alt="" />
                        <div className="p-2">
                            <h5 className="mb-3 fw-bold">Python for Finance and Algorithmic Trading with QuantConnect</h5>
                            <p>Learn to use Python, Pandas, Matplotlib, and the QuantConnect Lean Engine to perform financial analysis and trading</p>
                            <p className="d-flex justify-content-between align-items-center">
                                <span className="bg-success text-white py-1 px-2 rounded">John Smit</span>
                                <span className="bg-warning text-white py-1 px-2 rounded">48 hours</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="top_courses bg-white">
                        <img className="mb-3 mysize" src="https://www.master-of-finance.org/wp-content/uploads/2020/11/How-are-Finance-and-Economics-Related.jpg" alt="" />
                        <div className="p-2">
                            <h5 className="mb-3 fw-bold">Introduction to Islamic Economics and Finance</h5>
                            <p>Learn one of the Fastest Growing Niches in Economics and Finance, and Understand how Islamic Financial Instruments work</p>
                            <p className="d-flex justify-content-between align-items-center">
                                <span className="bg-success text-white py-1 px-2 rounded">Daneial Vettory</span>
                                <span className="bg-warning text-white py-1 px-2 rounded">10 hours</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="top_courses bg-white">
                        <img className="mb-3 mysize" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg" alt="" />
                        <div className="p-2">
                            <h5 className="mb-3 fw-bold">Data Science and Statistics for Environmental Professionals</h5>
                            <p>Basic course to learn environmental data management: solid waste, air pollution, effluent discharge, groundwater, etc.</p>
                            <p className="d-flex justify-content-between align-items-center">
                                <span className="bg-success text-white py-1 px-2 rounded">Shafiqul Islam</span>
                                <span className="bg-warning text-white py-1 px-2 rounded">20 hours</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="top_courses bg-white">
                        <img className="mb-3 mysize" src="https://dragonzap.com/storage/uploads/60ed77672c985.jpg" alt="" />
                        <div className="p-2">
                            <h5 className="mb-3 fw-bold">WebGL 2D/3D Programming and Graphics Rendering For The Web</h5>
                            <p>Become an in-demand WebGL Ninja by learning all the web developments features for 3D online graphics and rendering</p>
                            <p className="d-flex justify-content-between align-items-center">
                                <span className="bg-success text-white py-1 px-2 rounded">Micheal Clark</span>
                                <span className="bg-warning text-white py-1 px-2 rounded">30 hours</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCourses;