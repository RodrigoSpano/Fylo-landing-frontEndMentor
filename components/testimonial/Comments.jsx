import { Image, Stack } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import CommentCard from './CommentCard'

function Comments() {
  return (
    <Stack alignItems='center' justifyContent='center' p={20} direction='arrow' gap={10} position='relative'>
      <motion.div animate={{x: 40, y:-100}} initial={{zIndex: 0}}>
        <Image src='/assets/bg-quotes.png' alt='quotes'/>
      </motion.div>
      <CommentCard src='/assets/profile-1.jpg' name='Satish Patel' rol='Founder & CEO, Huddle'/>
      <CommentCard src='/assets/profile-2.jpg' name='Bruce McKenzie' rol='Founder & CEO, Huddle' />
      <CommentCard src='/assets/profile-3.jpg' name='Iva Boyd' rol='Founder & CEO, huddle' />
      
    </Stack>
  )
}

export default Comments