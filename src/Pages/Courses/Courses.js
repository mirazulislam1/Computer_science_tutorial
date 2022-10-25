import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Course from '../Course/Course';


const Courses = () => {
    const courses = useLoaderData();
     
    return (
       <div >
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
       </div>
    );
};

export default Courses;