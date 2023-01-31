import React from 'react'
import './style.css'


const Start = ({ man, woman }) => {
  return (
    <div className='start'>
      <h1>Escolha </h1>
      <div className="buttonarea">

        <button className='btn-1 manButton' onClick={man}>Homem</button>
        <button className='btn-2 womanButton' onClick={woman}>Mulher</button>

      </div>

    </div>
  )
}

export default Start