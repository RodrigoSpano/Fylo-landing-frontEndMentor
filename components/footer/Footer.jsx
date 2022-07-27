import { Box, Flex, Heading, Link, Stack, Text, Image } from '@chakra-ui/react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <Stack bgColor='hsl(216, 53%, 9%)' minH='md' zIndex='0' px={{base:'5',sm:20}} userSelect='none'>
      <Box w='sm' pt={{base:'20',sm:'10'}}>
        <Image src='/assets/logo.svg' alt='logo' width='200px' height='70px' objectFit='contain'/>
      </Box>

      <Flex direction={{base:'column',sm:'row'}} wrap={{base:'nowrap',sm:'wrap'}} gap={{base:'10',sm:'48'}} justifyContent='center' py={{base:'10', sm:'5'}}>

        <Stack direction='row' w='sm' alignItems='center' justifyContent='center' pr={{base:'10', sm:'0'}}>
          <Image src='/assets/icon-location.svg' alt='location' width='20px' height='20px' objectFit='contain'/>
          <Text pt={{base:'2',sm:'10'}} fontSize='12px' w={{base:'280px',sm:'315px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam velit quia, voluptatem iste aliquam ipsa eveniet error, quo.
          </Text>
        </Stack>

        <Flex direction='column' gap={5} justifyContent='center'>
          <Stack direction='row' alignItems='center'>
            <Image src='/assets/icon-phone.svg' alt='phone' width='20px' height='20px' objectFit='contain' />
            <Text> +1-543-123-4567</Text>
          </Stack>

          <Stack direction='row' alignItems='center'>
            <Image src='/assets/icon-email.svg' alt='phone' width='20px' height='20px' objectFit='contain' />
            <Text> example@fylo.com </Text>
          </Stack>
        </Flex>

        <Stack>
          <Heading fontFamily='Raleway, sans-serif' fontSize='14px' as='h4'>About Us</Heading>
          <Text>Jobs</Text>
          <Text>Press</Text>
          <Text>Blog</Text>
        </Stack>

        <Stack>
          <Heading fontFamily='Raleway, sans-serif' as='h4' fontSize='14px'>Contact Us</Heading>
          <Text>Terms</Text>
          <Text>Privacy</Text>
        </Stack>

        <Stack direction='row' justifyContent='center' gap={5}>
          <Link isExternal href='#' fontSize='20px'><BsFacebook/></Link>
          <Link isExternal fontSize='20px'><BsTwitter/></Link>
          <Link isExternal fontSize='20px'><BsInstagram /></Link>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Footer