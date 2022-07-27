import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <Stack userSelect='none' w='100vw' minH='90vh' justifyContent='center' alignItems='center' gap={0} bgImage={'/assets/bg-curvy-desktop.svg'} bgSize='contain' bgPosition='bottom' bgRepeat='no-repeat' >
      <Image src='/assets/illustration-intro.png' alt='illustration' width='500px' height='500px' objectFit='contain' /> 

      <Box maxW='600px' display='flex' flexDirection='column' alignItems='center' gap={5}>
        <Heading as='h1' fontSize={{base:'20px', sm:'26px'}} w={{base:'250px',sm:'400px'}} textAlign='center' fontFamily='Raleway, sans-serif'>
          All your files in one secure location, accessible anywhere.
        </Heading>
        <Text textAlign='center' w={{base:'300px',sm:'400px'}}>Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends family, and co-workers.
        </Text>
        <Link href='#'>
          <Button 
          fontFamily='Raleway, sans-serif'
          bg='linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,178,214,1) 100%)'
          borderRadius={20}
          px='20'
          h='40px'
          _hover={{transition: 'all linear 0.3s' ,bg:'hsl(176, 68%, 64%)'}}
          >
          Get Started
          </Button>
        </Link>
      </Box>
    </Stack>
  )
}

export default Header