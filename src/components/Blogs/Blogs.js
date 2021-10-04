import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://azizulwd.github.io/blog-json/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div className="container">
            <div className="row g-4">
                {
                    blogs.map(blog => <Blog
                        key={blog.smMonth}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;