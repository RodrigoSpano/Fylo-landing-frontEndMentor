import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

const Productive = () => {

  const sky = 'hsl(176, 68%, 64%)'

  return (
    <Stack direction={{base:'column',sm:'row'}} alignItems='center' justifyContent='center' minH='50vh' gap={10} p={10} pt={16} userSelect='none'>
      <Image src='/assets/illustration-stay-productive.png' alt='stay productive picture' width='500px' height={{base:'300px',sm:'500px'}} objectFit='contain'/>
      <Flex direction='column' gap={5} >
        <Heading fontFamily='Raleway, sans-serif' as='h2' w='300px' fontSize={{base:'18px', sm:'26px'}}>Stay productive, wherever you are</Heading>
        <Text w={{base:'300px',sm:'400px'}} >Never let location be an issue when accessing your files. Fylo has you covered for all of your storage needs.</Text>
        <Text w={{base:'300px',sm:'400px'}}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</Text>

        
        <Flex display='flex' flexDirection='row' gap={2} borderBottom='1px solid hsl(218, 28%, 13%)' _hover={{borderBottom:'1px solid hsl(176, 68%, 64%)'}} userSelect='none' w='max' alignItems='center' >
          <Text color={sky} cursor='pointer' >See how Fylo works</Text>
        
          <Image src='/assets/icon-arrow.svg' alt='arrow' objectFit='contain' width='15px' height='15px'  />
        </Flex>
        

      </Flex>
    </Stack>
  )
}

export default Productive