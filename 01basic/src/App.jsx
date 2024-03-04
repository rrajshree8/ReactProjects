import { useState } from 'react'
import First from './Components/First'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
    </>
  )
}

export default App
