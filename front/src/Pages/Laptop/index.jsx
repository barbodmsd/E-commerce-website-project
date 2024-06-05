import React from 'react'
import VideoBanner from '../../Components/VideoBanner'
import { Box } from '@mui/material'

export default function Laptop({theme}) {
  return (
    <Box minHeight={'120vh'}>
    <VideoBanner model={'laptops'} theme={theme}/>
    </Box>
  )
}
