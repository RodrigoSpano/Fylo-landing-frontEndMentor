import { Flex, Heading, Stack, Text, chakra, Input, Button } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import Validation from './Validation'

const Form = () => {
  return (
    
    <Stack alignItems='center' justifyContent='center' zIndex='1' pt={5} userSelect='none'>
      <motion.div initial={{y:40}}>

        <Stack bg='hsl(217, 28%, 15%)' h='2xs' borderRadius={10} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' w='container.sm' p={10}>

          <Flex direction='column' alignItems='center' gap={5}>
            <Heading fontFamily='Raleway, sans-serif' as='h2'>Get early access today</Heading>
            <Text textAlign='center' >It only takes a minute to sign up and our free starter tier is extremely generous. If you have any question, our support team would be happy to help you.</Text>
          </Flex>

          <Validation />

        </Stack>
      </motion.div>
    </Stack>
  )
}

export default Form