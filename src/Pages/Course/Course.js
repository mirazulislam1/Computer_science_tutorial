import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEye } from 'react-icons/fa';
import { HiShare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './Course.css'


const Course = ({course}) => {
 
    const { image, title, details, course_duration, admit_lastDate, batch } =course;
    return (
      <Col lg={6}>
      <Card className='mb-4'>
      <Card.Img variant="top" style={{height: '300px', width: '100%'}} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {
                 details.length > 180 ?
                     <>{details.slice(0, 180) + '...'} <Link to={`/course/${course.id}`}>Read more</Link>  </>
                     :
                     details
            }
        </Card.Text>
        <p>Course-Duration : {course_duration}</p>
         <p>Admit-LastDate : {admit_lastDate}</p>
         <p>Batch : {batch}</p>
      </Card.Body>
      <Button variant="success">Get premium access</Button>{' '}
      <Card.Footer>
              <div className="d-flex justify-content-between">
                <FaEye></FaEye>
                <HiShare></HiShare>   
              </div>
      </Card.Footer>
    </Card>
    </Col>
    );
};

export default Course;