import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';


const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const { image, title, details, course_duration, admit_lastDate, batch } =course;
   
   
    return (

     <Container>
     <Card>
     <Card.Img variant="top" style={{height: '400px', width: '100%'}} src={image} />
     <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Text>
         {details}
       </Card.Text>
       <p>Course-Duration : {course_duration}</p>
       <p>Admit-LastDate : {admit_lastDate}</p>
       <p>Batch : {batch}</p>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
     </Container>
    
    );
};

export default CourseDetails;