import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
  <h1 className="bg-green-300 text-blue-950 p-4 rounded-2xl mt-2 flex items-center justify-center font-extrabold font-size-">Tailwind test</h1>
  <Card username="Raj" btn="click me"/>
  <Card username="Shree" />
    </>
  )
}

export default App
