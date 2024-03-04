import React from 'react'
import { Box, Input, FormLabel, Flex, FormControl, Select, Button } from '@chakra-ui/react'

const InputBox = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
}) => {
  return (
    <Box
      bgColor="rgba(255, 255, 255, 0.8)"
      width={{ base: "35%", md: "35%" }}
      h={{base:"35%", md:"35%"}}
      rounded="20px"
      display="flex"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
    <Box>
     <Box background="white" width="100%" h="35%" mt="30px" rounded="5px" ml={{ base: "5%", md: "30px" }} mr={{ base: "5%", md: "30px" }}>
     <Flex flexDirection={{ base: "column", md: "row" }}>
        <FormControl display="flex" flexDirection="row" marginRight={{ base: "0", md: "4" }} mb={{ base: "4", md: "0" }}>
          <FormLabel
            mt={{ base: "20px", md: "20px" }}
            ml={{ base: "10px", md: "10px" }}
            fontFamily={"serif"}
            fontSize={{ base: "medium", md: "large" }}
            fontWeight={"800"}
            color={"#616B7C"}
          >
          FROM
           <Input
            type="number"
            placeholder="Amount"
            background={"#FEFEFE"}
            ml={{base:"0px",md:"0px"}}
            mt={{ base: "17px", md: "17px" }}
            disabled={amountDisable}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          />
          </FormLabel>
         
        </FormControl>

        <FormControl display="flex" flexDirection="row" marginLeft={{ base: "0", md: "4" }}>
          <FormLabel
            mt={{ base: "20px", md: "15px" }}
            ml={{ base: "5px", md: "50px" }}
            color={"#616B7C"}
            fontSize={{ base: "medium", md: "large" }}
            fontWeight={"800"}
          >
            CURRENCY TYPE
            <Select
         background={"#FEFEFE"}
            mt={{ base: "17px", md: "20px" }}
            ml={{ base: "5px", md: "5px" }}
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
         >
         {currencyOptions.map((cur)=>(
          <option key={cur} value={cur}>{cur}</option>
         ))}  
         </Select>
         
          </FormLabel>
        </FormControl>
        
      </Flex>
     </Box>
     <Box>
      <Button 
       ml={{ base: "5%", md: "280px" }}
      background="#212F3D"
      color="white"
      cursor="pointer"
      _hover={{background:"#AEB6BF", color:"black"}}>
        Swap
      </Button>
     </Box>
     <Box background="white" width="100%"  rounded="5px" ml={{ base: "5%", md: "30px" }} mr={{ base: "5%", md: "30px" }} mt={{ base: "30px", md: "0" }}>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <FormControl display="flex" flexDirection="row" marginRight={{ base: "0", md: "4" }} mb={{ base: "4", md: "0" }}>
          <FormLabel
            mt={{ base: "20px", md: "20px" }}
            ml={{ base: "10px", md: "10px" }}
            fontFamily={"serif"}
            fontSize={{ base: "medium", md: "large" }}
            fontWeight={"800"}
            color={"#616B7C"}
          >
          TO
           <Input
            type="number"
            placeholder="Amount"
            background={"#FEFEFE"}
            ml={{base:"0px",md:"0px"}}
            mt={{ base: "17px", md: "17px" }}
            disabled={amountDisable}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          />
          </FormLabel>
        </FormControl>

        <FormControl display="flex" flexDirection="row" marginLeft={{ base: "0", md: "4" }}>
          <FormLabel
            mt={{ base: "20px", md: "15px" }}
            ml={{ base: "5px", md: "50px" }}
            color={"#616B7C"}
            fontSize={{ base: "medium", md: "large" }}
            fontWeight={"800"}
          >
            CURRENCY TYPE
            <Select
         background={"#FEFEFE"}
            mt={{ base: "17px", md: "20px" }}
            ml={{ base: "5px", md: "5px" }}
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            
         >
         {currencyOptions.map((cur)=>(
          <option key={cur} value={cur}>{cur}</option>
         ))}
         
         </Select>
          </FormLabel>
        </FormControl>
       
      </Flex>
      </Box>
      <Button 
       ml={{ base: "5%", md: "200px" }}
       mt={{base:"8px", md:"8px"}}
       w={{base:"40%"}}
      background="#212F3D"
      color="white"
      cursor="pointer"
      _hover={{background:"#AEB6BF", color:"black"}}>
        CONVERT
      </Button>
      </Box>
    </Box>
  )
}

export default InputBox
