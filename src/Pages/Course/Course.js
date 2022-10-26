import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaEye } from 'react-icons/fa';
import { HiShare } from 'react-icons/hi2';
import './Course.css'


const Course = ({course}) => {
    const { image, title, details, course_duration, admit_lastDate, batch } =course;
    return (
      <Card className='course-card shadow-lg'>
      <Card.Header className='fs-3 text-success'>{title}</Card.Header>
      <Card.Body>
        <Image className='card-image' src={image}></Image>  
        <Card.Text className='mt-2 fs-5'>
        {
          details.length > 250 ?
              <>{details.slice(0, 250) + '...'}  </>
              :
              details
      }
        </Card.Text>
        <p>Course-Duration : {course_duration}</p>
        <p>Admit-LastDate : {admit_lastDate}</p>
        <p>Batch : {batch}</p>
        
      </Card.Body>
      <Card.Footer>  
                <div className="d-flex justify-content-between">
                <FaEye></FaEye>
                <HiShare></HiShare>   
                </div>
            </Card.Footer>
    </Card>
    );
};

export default Course;