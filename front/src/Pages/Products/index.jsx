import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const ProductCards = ({img,name,id,description,price,discount}) => {
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
export default function Products() {
  return (
    <></>
  )
}
