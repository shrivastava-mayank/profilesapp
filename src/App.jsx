import { useState } from 'react'
import reactLogo from './assets/react.svg'
import linkedinLogo from '/LinkedIn_logo_initials.png'
import facebookLogo from '/facebook-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <span>
        <a href="http://www.linkedin.com/in/shri-mayank" target="_blank">
          <img src={linkedinLogo} className="logo" alt="Mayank Shrivastava" />
        </a>
        </span>
        <span>
        <a href="https://www.facebook.com/mayank.shrivastava.060983" target="_blank">
          <img src={facebookLogo} className="logo" alt="Mayank Shrivastava" />
        </a>
        </span>
       
      </div>
      <h1>Mayank Shrivastava</h1>
      <div className="card">
      
        <button onClick={() => setCount((count) => count + 1)}>
          Click me to increase count
        </button>

        <p>
            Curent count is: {count}
        </p>
      </div>
      
    </>
  )
}

export default App
