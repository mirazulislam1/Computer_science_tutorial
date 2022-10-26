import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from '../Course/Course';
import LeftSide from '../LeftSide/LeftSide';



const Courses = () => {
    const courses = useLoaderData();

    

    return (

        <Container>
        <Row>
            <Col lg='4'>
                <LeftSide></LeftSide>
            </Col>
            <Col  lg='8'>
                
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
                
            </Col>
        </Row>
    </Container>
       
    );
};

export default Courses;