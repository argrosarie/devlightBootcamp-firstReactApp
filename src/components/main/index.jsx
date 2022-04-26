import { useState } from 'react';
import './main.css';
import Login from '../login/';
import Register from '../register';
import Success from  '../success';
import Error from  '../error';

const Main = () => {
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"))

    function onSuccess() {
      setIsLogged("true");
    }
  
    return (
          <main className="main">
              {isLogged === "true" ? <Success /> : <Login 
              onSuccess={onSuccess} />
               } 
            
          </main>
        
    )
}

export default Main;