import {Link} from 'remix'

import {Flex, Box, Text, Button, VStack} from '@chakra-ui/react'

import BlogPreview from '../components/BlogPreview'
import LinkMenu from '../components/LinkMenu'
import TextContainer from '../components/TextContainer'

import MainContainer from '../components/templates/MainContainer'

export default function Index() {
  return (
    <MainContainer
      title='Home'
    >
      <TextContainer
        paragraphSpacing={3}
      >
        <Text fontWeight='medium'>Title</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta temporibus in repudiandae minus optio, consequuntur exercitationem nemo reprehenderit dolorem atque impedit voluptatem autem quia quam similique! Nihil, corrupti aspernatur.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempore minima vel possimus molestias perferendis animi placeat repellat temporibus laudantium dolores assumenda est, modi doloribus repudiandae distinctio incidunt dolorum numquam!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi, dolore reprehenderit molestias minus enim blanditiis officia distinctio esse id ipsum molestiae ea debitis natus eveniet illum? Modi, repudiandae laborum.</Text>
      </TextContainer>
      <TextContainer
        paragraphSpacing={3}
      >
        <Text fontWeight='medium'>Title</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta temporibus in repudiandae minus optio, consequuntur exercitationem nemo reprehenderit dolorem atque impedit voluptatem autem quia quam similique! Nihil, corrupti aspernatur.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempore minima vel possimus molestias perferendis animi placeat repellat temporibus laudantium dolores assumenda est, modi doloribus repudiandae distinctio incidunt dolorum numquam!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi, dolore reprehenderit molestias minus enim blanditiis officia distinctio esse id ipsum molestiae ea debitis natus eveniet illum? Modi, repudiandae laborum.</Text>
      </TextContainer>
      <TextContainer
        paragraphSpacing={3}
      >
        <Text fontWeight='medium'>Title</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta temporibus in repudiandae minus optio, consequuntur exercitationem nemo reprehenderit dolorem atque impedit voluptatem autem quia quam similique! Nihil, corrupti aspernatur.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempore minima vel possimus molestias perferendis animi placeat repellat temporibus laudantium dolores assumenda est, modi doloribus repudiandae distinctio incidunt dolorum numquam!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi, dolore reprehenderit molestias minus enim blanditiis officia distinctio esse id ipsum molestiae ea debitis natus eveniet illum? Modi, repudiandae laborum.</Text>
      </TextContainer>
    </MainContainer>
  );
}
