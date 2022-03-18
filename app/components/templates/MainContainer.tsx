import {Box, Flex, Button, Text} from '@chakra-ui/react'
import LinkMenu from '../../components/LinkMenu'
import React from 'react'

const MainContainer = (props: any) => {
  return (
    <Flex
        width='100vw'
        height='100vh'
        bgColor='#FFFFFF'
        flexDirection='column'
        alignItems='center'
    >
        <Box
        textAlign='center'
      >
        <Text
          fontSize='4xl'
          fontWeight='bold'
        >Welcome to Dev Blog</Text>
      </Box>
      <Box
        paddingX={10}
        width='50%'
      >
        <Text
          fontSize='3xl'
          fontWeight='bold'
        >
          {props.title}
        </Text>
        <Flex
          borderRadius={6}
          justifyContent='space-between'
        >
          <Box
            borderLeftRadius={6}
            bgColor='#efe7ff'
            width='65%'
            padding={3}
          >
            <Flex
              flexDirection='column'
              overflowY='auto'
              gap={3}
              height='90ex'
            >
              {props.children}
            </Flex>
          </Box>
          <Box
            bgColor='#f8f5ff'
            width='35%'
            borderRightRadius={6}
            paddingY={3}
          >
            <LinkMenu />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default MainContainer