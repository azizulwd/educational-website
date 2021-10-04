import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header py-4 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h2>HeroEducare</h2>
                </div>
                <div className="top_menu_links">
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/blogs'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;