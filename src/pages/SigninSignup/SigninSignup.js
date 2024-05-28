// import React from 'react'
import React, { useState } from 'react'
import './SigninSignup.scss'
// import user_icon from '../../../public/person.png'
// import email_icon from '../../../public/email.png'
// import password_icon from '../../../public/password.png'

function SigninSignup() {
  const [action, setAction] = useState("Sign Up");
  return(
    <div className='container-login'>
        <div className='header-login'>
            <div className='text'>{action}</div>
                <div className='underline'></div>
        </div>
        <div className='inputs-login'>
            {action==="Login"?<div></div>: <div className='input-login'>
                <img src="person.png" alt='' className='logo'/>
                <input type='text' placeholder='Name' />
            </div>}
            <div className='input-login'>
                <img src="email.png" alt='' className='logo' />
                <input type='email' placeholder='Email Id' />
            </div>
            <div className='input-login'>
                <img src="password.png" alt='' className='logo' />
                <input type='password' placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Forgot password?<span>Click Here</span></div>}
        <div className='submit-container'>
            <div className={action==="Login"?"submit-login gray":"submit-login"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit-login gray":"submit-login"} onClick={() =>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default SigninSignup
