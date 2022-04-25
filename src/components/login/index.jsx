import React, {useState} from 'react';
import './login.css';

import {AiOutlineEyeInvisible, AiOutlineMail} from 'react-icons/ai';

// testing data:
// email : teacher@devlights.com"
// ps: testing

const Login = () => {
  


  return (
   <div className="login">
       <h1 className="login__title">
           Stax Food Admin Login
       </h1>
       <div className="login__modal">
           <p className="login__modal--directions">Please fill in your unique admin login details below</p>
           <form className='login__modal--form'>
               <div className='login__modal--form--select-container'>
                <label htmlFor='select-who'>Who are you?</label>
                    <select className='select' name="Tipo" id="select-who">
                        <option value="alumno">Student</option>
                        <option value="profesor">Teacher</option>
                    </select>
                </div>
                <form action="" className='login__modal--form-container'>
                <label className='login__modal--form--label' htmlFor="form__password">Email</label>
              <div className='container'>
                  <input className='login__modal--form--input' type="email" id='form__password'      placeholder='Email' />
                    <div className='fontawesome'><AiOutlineMail/></div>  
              </div> 
               <label className='login__modal--form--label' htmlFor="form__password">Password</label>
              <div className='container'>
                  <input className='login__modal--form--input' type="password" id='form__password'      placeholder='******' />
                    <div className='fontawesome'><AiOutlineEyeInvisible/></div>  
              </div> 
                <p className="login__modal--form--forgot">forgot your password?</p>
                </form>
                <div className='login__modal--form--buttoncontainer'>
               <button className="login__modal--form--button signup">Sign up</button>
               <button className="login__modal--form--button signin">Sign in</button>
               </div>
           </form>
       </div>
   </div>
  )
}

export default Login;