import { Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Stack h='100px' w='100vw' direction='row' justifyContent='space-between' px='20' alignItems='center' userSelect='none'>
      <Image src='/assets/logo.svg' alt='logo' width='200px' height='50px' />
      <Flex gap={10}>
        <Link href='#'>
          <Text cursor='pointer'>Features</Text>
        </Link>
        <Link href='#'>
          <Text cursor='pointer'>Team</Text>
        </Link>
        <Link href='#'>
          <Text cursor='pointer'>Sign In</Text>
        </Link>
      </Flex>
    </Stack>
  )
}

export default Navbar