import {VStack, StackDivider, Text, Flex, Box} from '@chakra-ui/react'
import { Children } from 'react';
import {Link} from 'remix'


import React from 'react'



const LinkMenu = () => {
  return (
    <VStack
        divider={<StackDivider borderColor='gray.200' />}
    >
        <Link to='/'>Home</Link>
        <Link to='/posts/'>Posts</Link>
        <Link to='/aboutUs/'>About Us</Link>
        <Link to='/contactUs/'>Contact</Link>
    </VStack>
  )
}

export default LinkMenu