import React from 'react';
import './Footer.scss';
import logo from '../../logo.png';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';

function Footer() {
  return (
    <>
    <div className='footer bg-orange'>
      <div>
        <h3>Contact Info</h3>
        
        <div className='my-4'>
            <a href=''>9 8 7 6 5 4 3 2 1 0</a>
        </div>
        <div className='my-4'>
            <a href=''>03323 24168 </a>
        </div>
        <div className='my-4'>
            <a href=""> yumsecrets@gmail.com</a>    
        </div>
        {/* <div className='my-4'>
            <a href="">Sonarpur Station Road, Sonarpur, Kolkata, 700150</a>
        </div> */}
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className='my-4'>
            <a href=""> Twitter</a>
        </div>
        <div className='my-4'>
            <a href="" > Facebook</a>
        </div>
        <div className='my-4'>
            <a href=""> Instagram </a>
        </div>
      </div>
      <div>
        <h3>About</h3>
        <div className='my-4'>
            <a href="">Advertise</a>
        </div>
        <div className='my-4'>
            <a href="">Career</a>
        </div>
        <div className='my-4'>
            <a href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
    <div className='credit'>
      {/* <a href=''><Facebook className=' mx-3'/></a>
      <a href=''><Twitter className=' mx-3'/></a>
      <a href=''><Instagram className=' mx-3'/></a>
      <a href=''><Linkedin className=' mx-3'/></a> */}
      {/* <img src={logo} alt="My Image" className='pic' /> */}
      <p>&copy; Created By <span className='yum'> Yum Secrets </span> | All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer
