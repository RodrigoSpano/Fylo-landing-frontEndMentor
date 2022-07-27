import { Heading, Stack, Text, Image } from '@chakra-ui/react'
import {motion} from 'framer-motion'

const FeatureCard = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Stack userSelect='none' alignItems='center'>
        <Image src={props.src} alt='icon' width='100px' height={{base:'70px',sm:'100px'}} objectFit='contain' />
        <Heading as='h2' fontSize='18px' textAlign='center' fontWeight='700' fontFamily='Raleway, sans-serif'>{props.title}</Heading>
        <Text textAlign='center' w={{base:'300px',sm:'350px'}} color='gray.300' >{props.text}</Text>
      </Stack>
    </motion.div>
  )
}

export default FeatureCard