// App.jsx
import { Box, Button} from "@chakra-ui/react";
import React,{useState} from "react";

function App() {
  const[bgcolor,setColor]= useState("olive");
  
  
  return (
    <Box position="fixed"
    bottom={0}
    left={0}
    width="100%"
    bg={bgcolor}
    p={4}
    display="flex"
    justifyContent="space-around">

    <Button mb={0} mt={1000} ml={12}>
    <Button  color={"red"} onClick={()=>setColor("red")}>Red</Button>
    <Button  color={"blue"} onClick={()=>setColor("blue")}>Blue</Button>
    <Button  color={"lavender"} onClick={()=>setColor("lavender")}>Lavender</Button>
    <Button  color={"skyblue"} onClick={()=>setColor("skyblue")}>Sky Blue</Button>
    <Button  color={"pink"} onClick={()=>setColor("pink")}>Pink</Button>
    <Button  color={"purple"} onClick={()=>setColor("purple")}>Purple</Button>
       </Button>
    </Box>
  );
}

export default App;
