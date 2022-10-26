import React from 'react';
import './Footer.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer text-center pt-5'>
           
            <h1> Do You Want To admit 
            <br />
            in this course?</h1>
            <Button variant="primary">Contact US <HiOutlineArrowLongRight></HiOutlineArrowLongRight></Button>
            <div className='fs-5 footer-icon'>
            <p className='mt-3'>Copyright 2022</p>
            <a href=""><FaFacebook></FaFacebook></a>
            <a href=""><FaGoogle></FaGoogle></a>
            <a href=""><FaTwitter></FaTwitter></a>
            <a href=""><FaYoutube></FaYoutube></a>
            </div>
            
        </div>
    );
};

export default Footer;