import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
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