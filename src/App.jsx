import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Back Ground Color Changer</h1>
        <input type="color" onClick={
          (e)=>{
            document.body.style.background=e.target.value
          }
        }/>
      </div>
    </>
  )
}

export default App
