// App.jsx
import { 
  Box, Text,Heading,Input, 
  InputGroup, Button, Slider,SliderTrack,
  SliderFilledTrack,
  SliderThumb, Checkbox } from "@chakra-ui/react";
import React, {useState, useCallback, useEffect, useRef} from "react";

function App() {
  const[len,setLen]=useState(8)
  const[num,setNum]=useState(false)
  const[char,setChar]=useState(false)
  const[pass,setPass]=useState('')

  const passRef=useRef(null)

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <=len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPass(pass)
  },[len,num,char,setPass])

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(pass)
  }, [pass])



  useEffect(() => {
    passGen()
  },[len,num,char,passGen])

  return (
    <Box width="100%"  height="100vh" display="flex" flexDirection="column" bg={"#181818"}>
      <Heading as="h1" color="white" fontWeight=  'bold' textAlign='center'>
      Password Generator
      </Heading>
      <Box width=  "45%" height="20%" mt="120px" ml="500px"  bg={"#B48E92"} rounded="15px"  gap="5px">
      <Heading as="h3" color="black" fontWeight="bold" textAlign="center" gap="5px" mt={"15px"}>
      Generator
      </Heading>
      <InputGroup width={"90%"} ml={"45px"} mb={"15px"}>
        <Input type="text" value={pass} placeholder="Password" bg={"white"} border={"0"} mt={"30px"} readOnly ref={passRef}/>
        <Button border={"0"} mt={"30px"}  bg={"#9999ff"} onClick={copyPass}>Copy</Button>
      </InputGroup>
      <Box display="flex" alignItems="center" >
          <Slider
            aria-label="slider-ex-6"
            width={"30%"}
            defaultValue={8}
            min={8}
            max={100}
            ml={"50px"}
            onChange={(value) => setLen(value)}
            mr="3"
          >
            <SliderTrack>
              <SliderFilledTrack _focus={{ boxShadow: "none" }} />
            </SliderTrack>
            <SliderThumb boxSize={6} bg="blue.400" />
          </Slider>
          <label htmlFor="range">Length of password: {len}</label>
          
        <Checkbox ml={"35px"} 
        defaultChecked={num}
        onChange={()=>{
          setNum((prev)=>!prev)
        }}>
        <label htmlFor="num">Numbers</label>
        </Checkbox>
        <Checkbox ml={"35px"} 
        defaultChecked={char}
        onChange={()=>{
          setChar((prev)=>!prev)
        }}>
        <label htmlFor="char">Character</label>
        </Checkbox>
        </Box>
        
      
      </Box>
     
    </Box>
  );
}

export default App;
