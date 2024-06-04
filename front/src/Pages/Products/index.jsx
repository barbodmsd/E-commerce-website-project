import { Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../Utils/fetchData'
import { Link } from 'react-router-dom'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

export const ProductCards = ({ img, name, id, description, price, discount }) => {
  return <Card sx={{ width: 300, height: 400 }}>
    <CardMedia
      sx={{ height: 200 }}
      image={img}
      title={name}
    />
    <CardContent sx={{
      textAlign: 'left'
    }} >
      <Typography gutterBottom variant="h5" color={'txt.two'} component="div">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>
        {description.slice(0, 100)}
      </Typography>
      {/* <Typography component={discount&&'del'} >Price:${price}</Typography> */}
    </CardContent>
    <CardActions sx={{
      display: 'flex',
      justifyContent: 'end'
    }}>
      <Link sx={{ color: 'txt.white' }} to={`/products/product-details/${id}/${name.toLowerCase().replaceAll(' ', '-')}`}>
        <Button variant='contained' >details</Button>
      </Link>
    </CardActions>
  </Card>
}
export default function Products({theme}) {
  const [products, setProducts] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetchData('products?populate=*')
      setProducts(res)
    })()
  }, [])
  return (
    <>
      <Stack width={'100%'} justifyContent={'center'} gap={'50px'} sx={{
        m:'30px auto',
        px:'70px'
      }}>
        {/* titles */}
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'30px'} flexWrap={'wrap'}>
          {/* products text */}
          <Typography color={'txt.two'} fontSize={'2rem'} fontWeight={'bolder'}>Products</Typography>
          {/* sort and filter */}
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'50px'} flexWrap={'wrap'}>
            {/* sort */}
          <Stack>Sort</Stack>
          {/* filter */}
          <Stack alignItems={'center'} justifyContent={'center'} sx={{
              width: '30px',
              height: '30px',
              borderRadius: '10px',
              boxShadow: theme == 'light' ? '0 0px 1px 1px rgba(0,0,0,0.3)' : '0 0px 1px 1px rgba(255,255,255,0.2)',
            }}>
                <IconButton sx={{ color: 'txt.one', }}>
                  <FilterListRoundedIcon/>
                </IconButton>
              
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
