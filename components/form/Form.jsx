import { Flex, Heading, Stack, Text, chakra, Input, Button } from '@chakra-ui/react'
import {motion} from 'framer-motion'

const Form = () => {
  return (
    <Stack alignItems='center' justifyContent='center' zIndex='1' pt={5}>
      <motion.div initial={{y:40}}>

        <Stack bg='hsl(217, 28%, 15%)' h='2xs' borderRadius={10} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' w='container.sm' p={10}>

          <Flex direction='column' alignItems='center' gap={5}>
            <Heading as='h2'>Get early access today</Heading>
            <Text textAlign='center' >it only takes a minute to sign up and our free starter tier is extremely generous. If you have any question, our support team would be happy to help you.</Text>
          </Flex>

          <chakra.form display='flex' gap={5} justifyContent='center' alignItems='center'>
            <Input variant='filled' borderRadius={20} w='sm' placeholder='email@example.com' />
            <Button bg='linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,178,214,1) 100%)' borderRadius={20}
            _hover={{bg:'hsl(176, 68%, 64%)'}} >Get started for free</Button>
          </chakra.form>

        </Stack>
      </motion.div>
    </Stack>
  )
}

export default Form