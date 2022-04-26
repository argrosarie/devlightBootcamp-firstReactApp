import React from 'react';
import './register.css';
import {AiOutlineEyeInvisible, AiOutlineUser, AiOutlineMail} from 'react-icons/ai';


const Login = () => {
  return (
   <div className="login">
       <h1 className="login__title">
           Stax Food Admin Login
       </h1>
       <div className="login__modal">
           <form className='login__modal--form'>
                <form action="" className='login__modal--form-container'>

               
              <label className='login__modal--form--label' htmlFor="form__password">Name</label>
              <div className='container'>
                  <input className='login__modal--form--input' type="text" id='form__password'      placeholder='Name' />
                    <div className='fontawesome'><AiOutlineUser/></div>  
              </div> 
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
                </form>
                <div className='login__modal--form-buttoncontainer'>
               <button className="login__modal--form--button signin" onClick={() => console.log("info")}>Sign up</button>
               </div>
           </form>
       </div>
   </div>
  )
}

export default Login;