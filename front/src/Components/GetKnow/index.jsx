import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Fab, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import fetchData from '../../Utils/fetchData';
import './Slider.css';
import GetKnowSkelton from './SliderSkeleton';
// card in slider
export const GetKnowCard = ({ img,  description,name  }) => {
    return <Card elevation={5} sx={{ width: 300, height: 400 ,
        borderRadius:'20px',
        // backgroundImage:`url(${img})`,
        // backgroundPosition:'center',
        // backgroundSize:'cover',
        position:'relative',
        overflow:'hidden'
     }}>
        <img src={img} width='100%' height={'100%'} alt={name}/>
    </Card>
}
// create costume card slider its very helpful
export default function SliderGetKnow({ theme, title, route, model, field, secondField, operator, value }) {
    const [products, setProducts] = useState()
    // get data from  products
    useEffect(() => {
        (async () => {
            const res = await fetchData(`${model}?populate=*&${field && `filters[${field}]${secondField && `[${secondField}]`}[${operator}]=${value}`}&pagination[page]=1&pagination[pageSize]=10`)
            setProducts(res.slice(1))
        })()
    }, [title, route, model, field, secondField, operator, value])
    const items = products?.map((e, index) => <SwiperSlide key={index}>
        <GetKnowCard name={e.attributes.name} description={e?.attributes?.description} img={import.meta.env.VITE_URL + e?.attributes?.media?.data[0]?.attributes?.url} />
    </SwiperSlide>)
    return (
        <>
            {
                products ? <Stack sx={{ px: '50px', gap: '30px' ,my:'50px',}}>
                    <Box>
                        <Typography sx={{
                            color: 'txt.two',
                            fontSize: '2rem',
                            fontWeight: 'bolder',
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
                        slidesPerView={3}
                        modules={[Scrollbar, Navigation]}
                        className="GetKnow-swiper"
                    >
                        <Stack component={Fab} className={'prev-chev'} size={'small'}><ChevronLeftIcon /></Stack>
                        {
                            items
                        }
                        
                        <Stack component={Fab} className={'next-chev'} size={'small'}><ChevronRightIcon /></Stack>
                    </Swiper>
                </Stack> : <GetKnowSkelton />
            }
        </>
    );
}


