import { Box, Card, CardActions, CardContent, Skeleton, Stack } from '@mui/material'
import React from 'react'
export const ProductsSkeletonCard = () => {
  return <Card sx={{ width: 300, height: 400 }}>
    <Skeleton width={'100%'} height={'150px'} variant={'rectangular'} animation={'wave'} />
    <CardContent sx={{
      textAlign: 'left'
    }} >
      <Skeleton width={'100px'} height={'50px'} animation={'wave'} />
      <Skeleton width={'200px'} height={'80px'} animation={'wave'} variant={'rounded'} />
    </CardContent>
    <CardActions sx={{
      display: 'flex',
      justifyContent: 'end'
    }}>
      <Skeleton width={'100px'} height={'50px'} animation={'wave'} variant={'rounded'} />
    </CardActions>
  </Card>
}
export default function ProductsSkelton() {
  return (
    <>
      <Stack sx={{ px: '50px', }}>
        <Box>
          <Skeleton width={'100px'} height={'50px'} />
        </Box>
        <Stack direction={'row'} gap={'20px'} sx={{ py: '50px' }}
        >
          <ProductsSkeletonCard/>
          <ProductsSkeletonCard/>
          <ProductsSkeletonCard/>
          <ProductsSkeletonCard/>
        </Stack>
      </Stack>
    </>
  )
}

