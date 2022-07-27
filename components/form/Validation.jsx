import {chakra, Input, Button, Text, Box} from '@chakra-ui/react'
import {Formik} from 'formik'
import { useState } from 'react'


const Validation = () => {

  const [send, setSend] = useState(false)

  return (
    <Formik
    initialValues={{
      email: ''
    }}
    validate={(values) => {
      let errors = {}
      if(!values.email){
        errors.email = 'escribe un mail valido'
      } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
        errors.email = 'el correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
      }
      return errors;
    }}
    onSubmit={(values, {resetForm}) => {
      resetForm()
      setSend(true)
      setTimeout(()=>{
        setSend(false)
      },[3000])
      console.log(values)
    }}

    >
    {( {values, handleSubmit, handleChange, handleBlur, errors, touched} ) => (
      <chakra.form onSubmit={handleSubmit} display='flex' pt={2} flexDirection='column' gap={5} justifyContent='center' alignItems='center'>
        <Box display='flex' gap={5}>
          <Input name='email' value={values.name} onChange={handleChange} onBlur={handleBlur} variant='filled' borderRadius={20} w='sm' placeholder='email@example.com' />
          <Button type='submit' bg='linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,178,214,1) 100%)' borderRadius={20}
          _hover={{bg:'hsl(176, 68%, 64%)'}} >Get started for free</Button>
        </Box>
        <Box>
          {touched.email && errors.email && <Text color='red.400' pl={5} fontWeight='bold'>Please enter a valid address</Text>}
          {send ? (<Text color='green.400' fontWeight='bold'>Sent successfully!</Text>) : null}
        </Box>
        
      </chakra.form>
    )}
      
    </Formik>
  )
}

export default Validation