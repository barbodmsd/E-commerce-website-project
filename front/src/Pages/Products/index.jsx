import { Box, Button, Card, CardActions, CardContent, CardMedia, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../Utils/fetchData'
import { Link, useParams } from 'react-router-dom'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardSkeleton from './CardSkeleton';

// card products
export const ProductCards = ({ img, name, id, description, price, discount, theme }) => {
  return <Card elevation={5} sx={{ width: 280, height: 400 }}>
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
      {
        !discount && <Typography variant="body2" sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>
          {description.slice(0, 70)}
        </Typography>
      }
      <Typography variant="body2" sx={{ m: !discount && '5px 0 0 0 ', color: theme == 'light' ? '#4f4f4f' : 'txt.three', textDecoration: discount && 'line-through', fontSize: !discount && '16px' }}>
        Price : ${price}
      </Typography>
      {
        discount && <Typography variant="body2" sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three', fontSize: '15px' }}>
          Discount : ${(price * (1 - (discount / 100)))}
        </Typography>
      }
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

export default function Products({ theme }) {
  const [products, setProducts] = useState()
  const [sortBy, setSortBy] = useState('createdAt:desc');
  const [open, setOpen] = useState(false)
  const { catId, catName } = useParams()
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  // get products from data
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products?populate=*${catId == 'all-products' ? '' : catId == 'all-popular-products' ? '&filters[popular][$eq]=true' : `&filters[categories][$eq]=${catId}`}&sort=${sortBy}&pagination[page]=1&pagination[pageSize]=50`)
      setProducts(res)
    })()
  }, [sortBy])
  const items = products?.map((e, index) => <ProductCards key={index} name={e.attributes?.name} id={e.id} description={e.attributes?.description}
    price={e.attributes?.price} theme={theme} discount={e.attributes?.discount} img={import.meta.env.VITE_URL + e.attributes?.image?.data[0]?.attributes?.url}
  />)
  return (
    <>
      {
        products ? <Stack width={'100%'} justifyContent={'center'} gap={'50px'} sx={{
          m: '30px auto',
          px: '70px'
        }}>
          {/* titles */}
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'30px'} flexWrap={'wrap'}>
            {/* products text */}
            <Typography color={'txt.two'} fontSize={'2rem'} fontWeight={'bolder'}>{`${catId == 'all-products' ? 'Products' : catId == 'all-popular-products' ? 'Popular Products' : catName`Products`}`}</Typography>
            {/* sort and filter */}
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'50px'} flexWrap={'wrap'}>
              {/* sort */}
              <Box sx={{ width: 250 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label="sortBy"
                    onChange={handleSortChange}

                  >
                    <MenuItem value={'price:desc'}>Price(Hight-Low)</MenuItem>
                    <MenuItem value={'price:asc'}>Price(Low-Hight)</MenuItem>
                    <MenuItem value={'discount:desc'}>Most Discount</MenuItem>
                    <MenuItem value={'createdAt:desc'}>Newest</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* filter */}
              <Stack alignItems={'center'} justifyContent={'center'} sx={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                boxShadow: theme == 'light' ? '0 0px 1px 1px rgba(0,0,0,0.3)' : '0 0px 1px 1px rgba(255,255,255,0.2)',
              }}>
                <IconButton sx={{ color: 'txt.one', p: '20px' }} onClick={() => setOpen(true)}>
                  <FilterListRoundedIcon />
                </IconButton>
              </Stack>
              {/* drawer for filter */}
              <Drawer anchor={'top'} open={open} onClose={() => setOpen(false)}>
                <Box height={'400px'}></Box>
              </Drawer>
            </Stack>
          </Stack>
          <Stack direction={'row'} justifyContent={'center'} gap={'20px'} flexWrap={'wrap'}>
            {
              items
            }
          </Stack>
        </Stack> : <CardSkeleton />
      }
    </>
  )
}


