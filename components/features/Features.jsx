import { Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <Stack id='features' w='100vw' alignItems='center' justifyContent='center' py={10} >
      <Grid
        templateRows={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)'}}
        templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)'}}
        gap={48}
        userSelect='none'
      >
        <GridItem>
          <FeatureCard src='/assets/icon-access-anywhere.svg' title='Access your files, anywhere' text='The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere.'/>
        </GridItem>
        <GridItem>
          <FeatureCard src='/assets/icon-security.svg' title='Security you cant trust' text='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' />
        </GridItem>
        <GridItem>
          <FeatureCard src='/assets/icon-collaboration.svg' title='Real-time collaboration' text='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' />
        </GridItem>
        <GridItem>
          <FeatureCard src='/assets/icon-any-file.svg' title='Store any type of file' text='Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stores and shared.' />
        </GridItem>

      </Grid>
    </Stack>
  )
}

export default Features