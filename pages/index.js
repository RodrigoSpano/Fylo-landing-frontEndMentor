import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/header/Header'
import Comments from '../components/testimonial/Comments'
import Features from '../components/features/Features'
import Productive from '../components/main/Productive'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/form/Form'
import Footer from '../components/footer/Footer'


export default function Home() {
  return (
    <Stack minH='100vh' bgColor='hsl(218, 28%, 13%)' overflow='hidden' >
      <Head>
        <title>Fylo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack h='100vh' bg='hsl(217, 28%, 15%)'>
        <Navbar />
        <Header />
      </Stack>

      <Features />
      <Productive />

      <Stack minH='100vh' w='100vw' >
        <Comments />
        <Form />
        <Footer />
      </Stack>
      
    </Stack>
  )
}
