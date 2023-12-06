import { useState } from 'react'
import './App.css'
import State from './components/State'
import Effect from './components/Effect'
import EffectTwo from './components/EffectTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      <EffectTwo />
    </>
  )
}

export default App
