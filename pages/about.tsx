import { Box, Button, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Copyright from '../components/Copyright'
import Link from '../components/Link'
import ProTip from '../components/ProTip'

const About: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth='sm'>
          <Button variant='contained' component={Link} noLinkStyle href='/'>
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default About