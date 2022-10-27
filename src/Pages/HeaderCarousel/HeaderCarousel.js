import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './images/img1.png'
import pic2 from './images/img2.png'
import './HeaderCarousel.css'
import { Container } from 'react-bootstrap';


const HeaderCarousel = () => {
    return (
        <Container className='carousel mt-4'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{height: '500px'}}
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary'>Financially rewarding</h3>
                        <p className='text-info fs-5'>Computer scientists are some of the most highly paid in the world as their skills help businesses keep up with emerging trends. Areas such as cyber security and artificial intelligence, for example, have a shortage of skilled workers so there are plenty of exciting employment opportunities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: '500px'}}
                        className="d-block w-100"
                        src={pic1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary'> Computers are everywhere</h3>
                        <p className='text-info fs-5'>
                        There’s not an industry out there that isn’t using data and computer technology on a daily basis. Everything from finance and banking, gaming and mobile applications, to healthcare and security all require the specialist skills of professional computer scientists. 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default HeaderCarousel;