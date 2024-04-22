import { useState } from 'react'
import './App.css'
import Price from './components/Price'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Price/>
    </>
  )
}

export default App
