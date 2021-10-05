import React from 'react';

const Category = () => {
    return (
        <div className="container mb-5">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                    <div className="categorie bg-warning p-4 rounded">
                        <h3 className="mb-4 text-white">Analysis of Algorithms</h3>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="categorie bg-info p-4 rounded">
                        <h3 className="mb-4 text-white">Economics & Finance</h3>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="categorie bg-success p-4 rounded">
                        <h3 className="mb-4 text-white">Environmental Science</h3>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="categorie bg-danger p-4 rounded">
                        <h3 className="mb-4 text-white">Graph & Web Design</h3>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;