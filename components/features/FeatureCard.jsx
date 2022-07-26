import { Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const FeatureCard = (props) => {
  return (
    <Stack userSelect='none'>
      <Image src={props.src} alt='icon' width='100px' height='100px' objectFit='contain' />
      <Text textAlign='center' w='350px'>{props.text}</Text>
    </Stack>
  )
}

export default FeatureCard