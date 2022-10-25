import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Course = ({course}) => {
    const { id, image, title, details, course_duration, admit_lastDate, batch } =course;
    return (
        <Container>
            <Row>
                <Col lg='4'></Col>
                <Col lg='8'>
                    <Row>
                    <Col lg='6'></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;