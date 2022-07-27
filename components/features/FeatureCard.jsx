import { Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const FeatureCard = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Stack userSelect='none'>
        <Image src={props.src} alt='icon' width='100px' height='100px' objectFit='contain' />
        <Heading as='h2' fontSize='18px' textAlign='center' fontWeight='700' fontFamily='Raleway, sans-serif'>{props.title}</Heading>
        <Text textAlign='center' w='350px' color='gray.300' >{props.text}</Text>
      </Stack>
    </motion.div>
  )
}

export default FeatureCard