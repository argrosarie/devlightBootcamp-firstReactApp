import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import  EjemploUseState from './components/hooktest.jsx';
import Success from './components/success';
import Error from './components/error'


const App = () => {
  return (
    <>
    {/*<Success /> 
     <Error /> 
   {/* <Register />  */}
  <Login />
    </>
  )
}

export default App;
