import './index.css'



import { useState } from 'react'
import Man from './components/Man'
import Woman from './components/Woman'
import Start from './components/Start'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'man' },
  { id: 3, name: 'woman' }
]



function App() {

  const [formStage, setFormStage] = useState(stages[0].name)

  const startStart = () => {
    setFormStage(stages[0].name)
  }

  const startMan = () => {
    setFormStage(stages[1].name)
  }

  const startWoman = () => {
    setFormStage(stages[2].name)
  }

  const retry = () => {
    setFormStage(stages[0].name)
  }
  const retry2 = () => {
    setFormStage(stages[0].name)
  }


  return (
    <>
      {formStage === 'start' && <Start man={startMan} woman={startWoman} />}
      {formStage === 'man' && <Man startForm={startMan} retry={retry} />}
      {formStage === 'woman' && <Woman startForm={startWoman} retry={retry} />}
    </>
  )
}

export default App
