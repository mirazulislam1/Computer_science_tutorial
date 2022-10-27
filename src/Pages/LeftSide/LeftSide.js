import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://b610-lerning-platform-server-side-mirazulislam1.vercel.app/courses')
        .then(res => res.json())
        .then(data =>setCategories(data))
    }, [])
    return (
        <div>
        <h4>All category :{categories.length}</h4>
        {
            categories.map(category => <p key={category.id}>
                <Link to={`/course/${category.id}`}>{category.title}</Link>
                </p>)
        }
        </div>
    );
};

export default LeftSide;