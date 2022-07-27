import { Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <Stack h='100px' w='100vw' direction='row' justifyContent='space-between' px='20' alignItems='center' userSelect='none'>
      <Image src='/assets/logo.svg' alt='logo' width='200px' height='50px' />
      <Flex gap={10}>
        <motion.div whileHover={{scale:1.2}} whileTap={{scale: 1.4}}>
          <Link to='features' smooth={true} duration={500}>
            <Text cursor='pointer' color='gray.300' _hover={{color: 'white'}} >Features</Text>
          </Link>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} whileTap={{scale: 1.4}}>
          <Link to=''>
            <Text cursor='pointer' color='gray.300' _hover={{color: 'white'}} >Team</Text>
          </Link>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} whileTap={{scale: 1.4}}>
          <Link to=''>
            <Text cursor='pointer' color='gray.300' _hover={{color: 'white'}} >Sign In</Text>
          </Link>
        </motion.div>
      </Flex>
    </Stack>
  )
}

export default Navbar