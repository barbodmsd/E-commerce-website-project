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
import { Box, Fab, Skeleton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// card in slider
export const PopularCard = ({ img, name, price, description, id, theme }) => {
    return <Card sx={{ maxWidth: 300, height: 400 }}>
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
export default function PopularSlider({ theme }) {
    const [popular, setPopular] = useState()
    // get data from  products
    useEffect(() => {
        (async () => {
            const res = await fetchData('produts?populate=*&?filters[popular][$eq]=true')
            setPopular(res)
        })()
    }, [])
    const items = popular?.map((e, index) => <SwiperSlide key={index}>
        <PopularCard id={e.id} theme={theme} name={e?.attributes?.name} price={e.attributes?.price} description={e?.attributes?.description} img={import.meta.env.VITE_URL + e?.attributes?.image?.data[0]?.attributes?.url} />
    </SwiperSlide>)
    return (
        <>
            {
                popular ? <Stack sx={{ px: '50px', gap: '30px' }}>
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
                            {
                                nextEl: '.next-chev',
                                prevEl: '.prev-chev'
                            }
                        }
                        slidesPerView={4}
                        modules={[Scrollbar, Navigation]}
                        className="popular-swiper"
                    >
                        <Stack component={Fab} className={'prev-chev'} size={'small'}><ChevronLeftIcon /></Stack>
                        {
                            items
                        }
                        <Stack component={Fab} className={'next-chev'} size={'small'}><ChevronRightIcon /></Stack>
                    </Swiper>
                </Stack> :
                // skeleton
                    <Stack sx={{ px: '50px', gap: '30px' }}>
                        <Box>
                            <Skeleton animation={'wave'} width={'100px'} sx={{
                                color: theme == 'dark' && 'grey'
                            }} />
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
                            className="popular-swiper"
                        >
                            <Skeleton className='prev-chev' variant='circular' width={'50px'} height={'50px'} sx={{
                                color: theme == 'dark' && 'grey'
                            }} />
                           <SwiperSlide> <Skeleton width={'100%'} height={'100%'} variant={'rectangular'}/></SwiperSlide>
                            <Stack component={Fab} className={'next-chev'} size={'small'}><ChevronRightIcon /></Stack>
                        </Swiper>
                    </Stack>
            }
        </>
    );
}


