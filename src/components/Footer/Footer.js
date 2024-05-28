import React from 'react';
import './Footer.scss';
// import logo from '../../logo.png';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';


function Footer() {
  return (
    <>
    <div className='footer bg-orange'>
      <div className='footer-des'>
        <h1 className='yum'>YumSecrets</h1>
        <p>
          We're all about good recipes, and about quality home cooking that everyone can enjoy. 
          Whether you're looking for some healthy inspiration or learning how to cook a decadent desert, 
          we've trustworthy guidance for all your foodie needs.
        </p>
        <div className='follow'>
        <h3>Follow Us: </h3>
        <a href='/'><Facebook className=' mx-3 my-3'/></a>
        <a href='/'><Twitter className=' mx-3 my-3'/></a>
        <a href='/'><Instagram className=' mx-3 my-3'/></a>
        <a href='/'><Youtube className=' mx-3 my-3 '/></a>
        </div>
        
      </div>
      <div>
        <h3>Contact Us</h3>
        <div className='my-4'> 
            <a href="/">98765 43210</a>
        </div>
        <div className='my-4'>
            <a href="/" >033 428 0707</a>
        </div>
        <div className='my-4'>
            <a href="/">yumsecrets@gmail.com</a>
        </div>
      </div>
      <div>
        <h3>Useful Links</h3>
        <div className='my-4'>
            <a href="/">FAQ's</a>
        </div>
        <div className='my-4'>
            <a href="/">About Us</a>
        </div>
        <div className='my-4'>
            <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div className='credit py-2'>
    
      {/* <img src={logo} alt="My Image" className='pic' /> */}
      <p>&copy; Created By <span className='yum'> Yum Secrets </span> | All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer
