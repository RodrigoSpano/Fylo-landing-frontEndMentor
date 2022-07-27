import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CommentCard = (props) => {
  return (
    <Stack zIndex='1' p={{base:'8',sm:'10'}} w={{base:'300px',sm:'sm'}} bg='hsl(219, 30%, 18%)' borderRadius={5} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' fontSize={{base:'12', sm:'14px'}}>
      <Text>Fylo has improved our team productivity by an order of magnitude. Since making the switch out team has become a well-olled collaboration machine.</Text>
      <Flex gap={2}>
        <Avatar src={props.src} size={{base:'sm', sm:'md'}} alt='avatar'/>
        <Box display='flex' flexDirection='column' >
          <Text>{props.name}</Text>
          <Text>{props.rol}</Text>
        </Box>
      </Flex>
    </Stack>
  )
}

export default CommentCard