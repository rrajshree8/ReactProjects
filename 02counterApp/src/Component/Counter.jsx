import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(99)
    const [warning, setWarning] = useState('')


    const addValue=()=>{
        if(count<100){
        setCount(count+1)
        setWarning('')
        }
        else{
            setWarning('Value is allowed until 100')
        }
        
    }
    const subtractValue=()=>{
        if(count>0){
            setCount(count-1)
            setWarning('');
        }
        else{
            setWarning('Counter cannot be less than 0');
        }
         
    }
  return (
    <>
      <h1>Counter App</h1>  
      <h2>Counter Value:{count}</h2>
      {warning && <p style={{ color: 'red' }}>{warning}</p>}
      <button onClick={addValue}>INCREMENT</button>
      <br/><br/>
      <button onClick={subtractValue} >DECREMENT</button>
    </>
  )
}

export default Counter