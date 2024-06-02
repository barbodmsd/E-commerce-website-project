import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Stack component={'nav'} direction={'row'} alignItems={'center'}>
      <Typography color={'primary'}>Navbar</Typography>
    </Stack>
  )
}
