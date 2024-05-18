import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer bg-orange'>
      <div>
        <h3>Contact Info</h3>
        <div>
            <a href="#"> <i class="fas fa-phone"></i> 9876543210</a>
        </div>
        <div>
            <a href="#"> <i class="fas fa-envelop"></i> yumsecrets@gmail.com</a>    
        </div>
        <div>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> 9 Mirzha Ghalid Street, West Bengal, Kolkata: 700039   </a>
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div>
            <a href="#">Facebook </a>
        </div>
        <div>
            <a href="#">Twitter </a>
        </div>
        <div>
            <a href="#">Instagram </a>
        </div>
        <div>
            <a href="#">Linkedin </a>
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
