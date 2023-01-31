import React from 'react'
import './style.css'


const Start = ({ man, woman }) => {
  return (
    <div className='start'>
      <h1>Escolha </h1>
      <div className="buttonarea">

        <button className='btn-1' onClick={man}>Homen</button>
        <button className='btn-2' onClick={woman}>Mulher</button>

      </div>

    </div>
  )
}

export default Start