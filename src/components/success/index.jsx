import './success.css';

const Success = () => {
    return (
       <div className="success">
           <div className="success__modal">
           <p className="success__modal--text">you logged in successfully!</p>
           <div className='success__modal--text--usercontainer'>
           <p className='success__modal--text--rol'>{"rol"}</p>
           <p className='success__modal--text--email'>{"email"}</p>
           </div>
           
           </div>
       </div>
    )
}

export default Success;