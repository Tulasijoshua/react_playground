import { useState } from 'react'
import './App.css'
import State from './components/State'
import Effect from './components/Effect'
import EffectTwo from './components/EffectTwo'
import AuthStatus from './components/AuthStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <EffectTwo /> */}
      <AuthStatus />
    </>
  )
}

export default App
