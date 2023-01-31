import React from 'react'
import { useState } from 'react'
import './style.css'

const Woman = ({ retry }) => {

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

    setResult(parseInt(655) + parseInt((9.6 * weight)) + parseInt((1.8 * height)) - parseInt((4.7 * year)))

    console.log(result)

    setWeight("")
    setHeight("")
    setYear("")
  }
  return (
    <>
      <h1 className='type color-purple'>Mulher</h1>
      <form className='form'>

        <div className="form-title">
          <h1>Calcule a sua <br /> taxa <span className='color-purple'>metabólica </span>basal.</h1>
        </div>

        <div className="inputs">

          <label className='label-input '>
            Peso em quilos
            <input className='input-input border-purple'
              value={weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              placeholder={"75,8"} />
          </label>


          <label className='label-input '>
            Altura em centímetros
            <input className='input-input border-purple'
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="180" />
          </label>

          <label className='label-input'>
            Idade em anos
            <input className='input-input border-purple'
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="19" />
          </label>
        </div>

        <div className="buttonarea">
          <button className='btn-2' onClick={calculate} >Calcular</button>
        </div>


        {result > 1 &&
          <h2 className='text-result'> A sua taxa metabólica basal é de
            <span className='color-purple'> {result}</span>.</h2>
        }


      </form>

      <div className="buttonarea">
        <button onClick={retry} className='btn-2' >Voltar</button>
      </div>
    </>
  )
}

export default Woman