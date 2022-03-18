import {Link} from 'remix'

import {Flex, Box, Text, Button, VStack} from '@chakra-ui/react'

import BlogPreview from '../../components/BlogPreview'
import LinkMenu from '../../components/LinkMenu'

import MainContainer from '~/components/templates/MainContainer'

import {LoremIpsum} from 'lorem-ipsum'



const lorem = new LoremIpsum({
  sentencesPerParagraph: 
  {
    max: 8,
    min: 4
  },
  wordsPerSentence:
  {
    max: 16,
    min: 4
  }

})



export default function Posts(){
    return (
        <MainContainer title='Posts'>
          <BlogPreview preview={lorem.generateSentences(Math.floor(Math.random() * 8))} />
          <BlogPreview preview={lorem.generateSentences(Math.floor(Math.random() * 8))} />
          <BlogPreview preview={lorem.generateSentences(Math.floor(Math.random() * 8))} />
        </MainContainer>
    );
}