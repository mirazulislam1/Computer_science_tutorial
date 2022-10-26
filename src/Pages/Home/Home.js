import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import logo from './photo/images (4).jpg'
import './Home.css'
import Button from 'react-bootstrap/Button';
import {HiOutlineArrowLongRight} from "react-icons/hi2";
import HomeDetails from '../../others/HomeDetails/HomeDetails';

const Home = () => {
    return (
        <div>
            <HeaderCarousel></HeaderCarousel>
            <Container className='mt-5 mb-5'>
            <Row>
                <Col lg='6'>
                    <Image rounded className='image-fluid w-100'  src={logo}></Image>
                </Col>
                <Col lg='6'>
                <h2 className='study fs-1'>We Create Unique Campaigns That Help Your Study Grow</h2>
                <p className='fs-2'>Hood receives grant from Maryland Center for Computing Education.Funds received will contribute to educating educators on computing sciences....</p>

                <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
                </Col>
            </Row>
            </Container>
            <div className='d-flex justify-content-around solve-problem'>
            <div>
                <p className='fs-4 text-success'>We Can Solve Real Problems</p>
                <h1 className='text-primary'>What Can We Do For You?</h1>
            </div>
            <div className='mt-4'>
                <Button  variant="primary">Learn more <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
            </div>
            </div>
            <HomeDetails></HomeDetails>
        </div>
    );
};

export default Home;