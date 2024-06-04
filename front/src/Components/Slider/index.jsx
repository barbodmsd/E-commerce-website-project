import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Fab, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import fetchData from '../../Utils/fetchData';
import './Slider.css';
import ProductsSkelton from './SliderSkeleton';
// card in slider
export const ProductsCard = ({ img, name, price, description, id, theme }) => {
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
                Price: ${price}
            </Typography>
            <Typography variant="body2" sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>
                {description.slice(0, 100)}
            </Typography>
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
// create costume card slider its very helpful
export default function SliderProducts({ theme, title, route, model, field, secondField, operator, value }) {
    const [products, setProducts] = useState()
    // get data from  products
    useEffect(() => {
        (async () => {
            const res = await fetchData(`${model}?populate=*&${field && `filters[${field}]${secondField && `[${secondField}]`}[${operator}]=${value}`}`)
            setProducts(res)
        })()
    }, [])
    const items = products?.map((e, index) => <SwiperSlide key={index}>
        <ProductsCard id={e.id} theme={theme} name={e?.attributes?.name} price={e.attributes?.price} description={e?.attributes?.description} img={import.meta.env.VITE_URL + e?.attributes?.image?.data[0]?.attributes?.url} />
    </SwiperSlide>)
    return (
        <>
            {
                products ? <Stack sx={{ px: '50px', gap: '30px' }}>
                    <Box>
                        <Typography sx={{
                            color: 'txt.two',
                            fontSize: '2rem',
                            fontWeight: 'bolder'
                        }}>{title}</Typography>
                    </Box>
                    <Swiper
                        scrollbar={{
                            hide: true,
                        }}
                        navigation={
                            {
                                nextEl: '.next-chev',
                                prevEl: '.prev-chev'
                            }
                        }
                        slidesPerView={4}
                        modules={[Scrollbar, Navigation]}
                        className="products-swiper"
                    >
                        <Stack component={Fab} className={'prev-chev'} size={'small'}><ChevronLeftIcon /></Stack>
                        {
                            items
                        }
                        <SwiperSlide>
                            <Card sx={{ width: 300, height: 400 }}>
                                <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                                    <Link to={route}><Button>View All </Button></Link>
                                </Stack>
                            </Card>
                        </SwiperSlide>
                        <Stack component={Fab} className={'next-chev'} size={'small'}><ChevronRightIcon /></Stack>
                    </Swiper>
                </Stack> : <ProductsSkelton />
            }
        </>
    );
}


