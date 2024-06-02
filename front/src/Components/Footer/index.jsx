import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
      <Stack sx={{
        minHeight: '400px',
        bgcolor: '#3A3C3F',
        justifyContent: 'start',
        p: ' 30px 70px'
      }}>
        <Box><img width='150px' height='100px' src={'src/assets/logo.png'} alt='logo' /></Box>
        <Stack direction={'row'} gap={'70px'} sx={{ px: '20px' }}>
          <Stack>
            <Typography sx={{ color: 'txt.three', marginBottom: '15px' }}>ABOUT</Typography>
            <Typography ><Link sx={{ color: 'txt.three' }} underline={'hover'}>Submit on issue</Link></Typography>
            <Typography ><Link sx={{ color: 'txt.three' }} underline={'hover'}>Github repo</Link></Typography>
            <Typography ><Link sx={{ color: 'txt.three' }} underline={'hover'}>About</Link></Typography>
            <Typography ><Link sx={{ color: 'txt.three' }} underline={'hover'}>Shock</Link></Typography>
          </Stack>
          <Stack >
            <Typography sx={{ color: 'txt.three', marginBottom: '15px' }}>GETTING</Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Introduction</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Documentation</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Usage</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Globals</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Elements</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Collections</Link></Typography>
          </Stack>
          <Stack >
            <Typography sx={{ color: 'txt.three', marginBottom: '15px' }}>RESOURCES</Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Api</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>From productions </Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Visibility</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Accessibility</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Design defined</Link></Typography>
            <Typography><Link sx={{ color: 'txt.three' }} underline={'hover'}>Market place</Link></Typography>
          </Stack>
          <Stack >
            <Typography sx={{ color: 'txt.three', marginBottom: '15px' }}>SOCIAL MEDIA</Typography>
            <Typography><Link></Link></Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
