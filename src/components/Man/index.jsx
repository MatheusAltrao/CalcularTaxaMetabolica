import React from 'react'
import { useState } from 'react'


import './style.css'

const Man = ({ retry }) => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [year, setYear] = useState("")
  const [result, setResult] = useState(1)

  function calculate(ev) {

    ev.preventDefault()

    if (!weight || !height || !year) {
      alert('Preencha os campos corretamente')
      return

    } else if (result < 1) {
      alert('O resultado deve ser positivo')
      return
    }


    setResult(parseInt(66.5) + parseInt((13.75 * weight)) + parseInt((5.0 * height)) - parseInt((6.8 * year)))

    console.log(result)

    setWeight("")
    setHeight("")
    setYear("")
  }
  return (
    <>
      <h1 className='type color-cyan'>Homem</h1>

      <form className='form'>
        <div className="form-title">
          <h1>Calcule a sua <br /> taxa <span>metabólica </span>basal.</h1>
        </div>

        <div className="inputs">

          <label className='label-input '>
            Peso em quilos
            <input className='input-input border-cyan'
              value={weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              placeholder={"75,8"} />
          </label>


          <label className='label-input'>
            Altura em centímetros
            <input className='input-input border-cyan'
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="180" />
          </label>

          <label className='label-input'>
            Idade em anos
            <input className='input-input border-cyan'
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="19" />
          </label>
        </div>

        <div className="buttonarea">
          <button className='btn-1' onClick={calculate}>Calcular</button>
        </div>



        {result > 1 &&
          <h2 className='text-result'> A sua taxa metabólica basal é de
            <span className='color-cyan'> {result}</span>.</h2>
        }


      </form>

      <div className="buttonarea">
        <button onClick={retry} className='btn-1' >Voltar</button>
      </div>

    </>
  )
}

export default Man