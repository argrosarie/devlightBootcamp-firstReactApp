import './error.css'


const Error = () => {
    return (
      <div className="error">
          <div className="error__container">
              <p className="error__container--text">Ups! Incorrect data. </p>
              <button className='error__container--button'>Try again</button>
          </div>
      </div>
    )
}
export default Error;