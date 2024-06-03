import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './PopularSlider.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import fetchData from '../../../Utils/fetchData';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

// card in slider
export const PopularCard = ({ img, name, description, id }) => {
    return <Card sx={{ maxWidth: 300, height: 400 }}>
        <CardMedia
            sx={{ height: 200 }}
            image={img}
            title={name}
        />
        <CardContent sx={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'start'
        }} >
            <Typography gutterBottom variant="h5" color={'txt.two'} component="div">
                {name}
            </Typography>
            <Typography sx={{direction:'ltr'}}  variant="body2" color="txt.three">
                {description.slice(0, 100)}
            </Typography>
        </CardContent>
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'end'
        }}>
            <Link  sx={{ color: 'txt.white' }} to={`/products/product-details/${id}/${name.toLowerCase().replaceAll(' ','-')}`}><Button variant='contained'>Details</Button></Link>
        </CardActions>
    </Card>
}
export default function PopularSlider() {
    const [popular, setPopular] = useState()
    // get data from  products
    useEffect(() => {
        (async () => {
            const res = await fetchData('products?populate=*&?filters[popular][$eq]=true')
            setPopular(res)
        })()
    }, [])
    const items = popular?.map((e, index) => <SwiperSlide key={index}>
        <PopularCard id={e.id} name={e?.attributes?.name} description={e?.attributes?.description} img={import.meta.env.VITE_URL + e?.attributes?.image?.data[0]?.attributes?.url} />
    </SwiperSlide>)
    return (
        <>
            <Stack sx={{ px: '50px', gap: '30px' }}>
                <Box>
                    <Typography sx={{
                        color: 'txt.two',
                        fontSize: '2rem',
                        fontWeight: 'bolder'
                    }}>Popular</Typography>
                </Box>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    navigation={
                        true
                    }
                    slidesPerView={3}
                    modules={[Scrollbar,Navigation]}
                    className="popular-swiper"
                >
                    {
                        items
                    }
                </Swiper>
            </Stack>
        </>
    );
}


