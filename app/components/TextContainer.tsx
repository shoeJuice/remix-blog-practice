import {Box, Flex, Text} from '@chakra-ui/react'

import React from 'react'

const TextContainer = (props : any) => {
  return (
    <Flex
        flexDirection='column'
        padding={3}
        justifyContent='space-between'
        bgColor='white'
        borderRadius={6}
        gap={(props.paragraphSpacing)}
    >
        {props.children}
    </Flex>
  )
}

export default TextContainer