import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'

const Productive = () => {

  const sky = 'hsl(176, 68%, 64%)'

  return (
    <Stack direction='row' alignItems='center' justifyContent='center' minH='50vh' gap={10} p={5} userSelect='none'>
      <Image src='/assets/illustration-stay-productive.png' alt='stay productive picture' width='500px' height='500px' objectFit='contain'/>
      <Flex direction='column' gap={5}>
        <Heading as='h2' w='300px'>Stay productive, wherever you are</Heading>
        <Text w='400px'>Never let location be an issue when accessing your files. Fylo has you covered for all of your storage needs.</Text>
        <Text w='400px'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</Text>

        <Flex display='flex' flexDirection='row' gap={2} borderBottom='1px solid hsl(176, 68%, 64%)' _hover={{borderBottom: '1px solid white'}} userSelect='none' w='max' alignItems='center' >
          <Text color={sky} _hover={{color: 'gray.200'}} >See how Fylo works</Text>
          <Image src='/assets/icon-arrow.svg' alt='arrow' objectFit='contain' width='15px' height='15px'  />
        </Flex>

      </Flex>
    </Stack>
  )
}

export default Productive