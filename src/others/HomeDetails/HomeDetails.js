import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import {HiOutlineArrowLongRight  } from "react-icons/hi2";
import Button from 'react-bootstrap/Button';
import image1 from './images/download (1).jpg'
import image2 from './images/download (1).png'
import image3 from './images/download (2).png'
import image4 from './images/download (3).jpg'
import image5 from './images/download (4).jpg'
import image6 from './images/download (5).jpg'
import './HomeDetails.css'

const HomeDetails = () => {
    return (
        <div className='mt-5 g-4'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <Row>
                            <Col className='shadow-lg image-details' lg='12'>
                            <Image src={image1}></Image>
                            <h1>algorithms and complexity</h1>
                            <p>An algorithm is a specific procedure for solving a well-defined computational problem. The development and analysis of algorithms is fundamental to all aspects of  </p>
                            <Button bg='light'>Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                            <Col className='shadow-lg mt-4 image-details' lg='12'>
                            <Image src={image2}></Image>
                            <h1>Architecture and organization</h1>
                            <p>Computer architecture deals with the design of computers, data storage devices, and networking components that store and run programs, transmit data, and drive interactions between computers, across networks,. </p>
                            <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Col className='shadow-lg image-details' lg='12'>
                            <Image src={image3}></Image>
                            <h1>Computational science.</h1>
                            <p>Computational science, also known as scientific computing or scientific computation (SC), is a field in mathematics that uses advanced computing ...</p>
                            <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                            <Col className='shadow-lg mt-4 image-details' lg='12'>
                            <Image src={image4}></Image>
                            <h1>Graphics and visual computing.</h1>
                            <p>Graphics & Visual Computing is the open access sister journal of Computers & Graphics. Graphics & Visual Computing offers authors with high-quality research ...</p>
                            <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Col className='shadow-lg image-details' lg='12 '>
                            <Image  src={image5}></Image>
                            <h1>Human-computer interaction</h1>
                            <p>Human-computer interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction ...</p>
                            <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                            <Col className='shadow-lg mt-4 image-details'  lg='12'>
                            <Image src={image6}></Image>
                            <h1>Information management</h1>
                            <p>Information management (IM) concerns a cycle of organizational activity: the acquisition of information from one or more sources, the custodianship and the ...</p>
                            <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default HomeDetails;