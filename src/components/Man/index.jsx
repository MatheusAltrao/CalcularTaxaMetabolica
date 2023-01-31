import React from 'react'
import { useState } from 'react'


import './style.css'

const Man = ({ retry }) => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [year, setYear] = useState("")
  const [result, setResult] = useState(1)
  const [role, setRole] = useState()

  function calculate(ev) {

    ev.preventDefault()

    if (!weight || !height || !year || !role) {
      alert('Preencha os campos corretamente')
      return

    } else if (result < 1) {
      alert('O resultado deve ser positivo')
      return
    }

    setResult(role * (66 + ((13.7 * weight) + (5 * height) - (6.8 * year))))


  }
  return (
    <>
      <h1 className='type color-cyan'>Homem</h1>

      <form className='form'>
        <div className="form-title">
          <h1>Calcule a sua <br /> taxa <span className='color-cyan'>metabólica </span>basal.</h1>
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


        <label className='label-input'>
          Taxa de atividae na semana
          <select onChange={(e) => setRole(e.target.value)} value={role} name="role" className='border-cyan'>
            <option value={1.2}>Escolha uma opção</option>
            <option value={1.21}>Nenhuma atividade</option>
            <option value={1.375}>Atividade Leve 1 a 3 dias </option>
            <option value={1.55}>Atividade Moderada 3 a 5 dias</option>
            <option value={1.725}>Altamente Ativo 5 a 6 dias</option>
            <option value={1.9}>Extremamente Ativo 7 dias e 2 vezes ao dias</option>
          </select>
        </label>

        <div className="buttonarea ">
          <button className='btn-1 ' onClick={calculate}>Calcular</button>
        </div>



        {result > 1 &&
          <h2 className='text-result'> A sua taxa metabólica basal é de
            <span className='color-cyan'> {result.toFixed(2)}</span>!</h2>
        }


      </form>

      <div className="buttonarea back">
        <button onClick={retry} className='btn-1' >Voltar</button>
      </div>

    </>
  )
}

export default Man