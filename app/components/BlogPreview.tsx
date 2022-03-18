import {Box, Flex, Button, Text} from '@chakra-ui/react'

import React from 'react'

export default function PostPreview(props: any){

    return(
    <Flex
        flexDirection='column'
        padding={3}
        justifyContent='space-between'
        bgColor='white'
        borderRadius={6}
    >
        <Text
            fontSize='2xl'
            fontWeight='medium'
        >
            Title Goes Here
        </Text>
        <Text
            marginTop='2ex'
        >
            {props.preview}
        </Text>
        <Button 
            marginTop='2ex'
            colorScheme='purple'
            width='35%'
        >
            Read More
        </Button>
    </Flex>
    );
}