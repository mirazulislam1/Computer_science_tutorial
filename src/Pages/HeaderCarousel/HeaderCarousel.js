import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './images/img1.png'
import pic2 from './images/img2.png'
import './HeaderCarousel.css'


const HeaderCarousel = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{height: '500px'}}
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderCarousel;