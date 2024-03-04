import React from 'react';
import { Box, Flex, Input, TagLabel, Tag } from '@chakra-ui/react';
import InputBox from './Components/InputBox';

const App = () => {
  const backgroundImageUrl = 'https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

  return (
    <Box
      bgImage={`url(${backgroundImageUrl})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {/* Centered content box with top margin */}
      <InputBox/>
    </Box>
  );
};

export default App;
