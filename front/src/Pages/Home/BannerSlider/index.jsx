import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BannerSlider.css';
import fetchData from '../../../Utils/fetchData';
import { Box, Stack, Typography } from '@mui/material';

export const BannerCard = ({ img, description, name }) => {
    return <Stack sx={{
        width: '100%',
        height: '500px',
        position: 'relative',
        borderRadius: '20px',
        px:'50px',
        '&> img': {
            width: '100%',
            height: '100%',
            borderRadius: '20px'
        },
    }}>
        <Box sx={{
            width: '300px',
            position: 'absolute',
            left: '8%',
            top: '25%',
            transform: 'translateY(-25%)',
            zIndex: 1000
        }}>
            <Typography color={'txt.three'}>{description.slice(0, 99)}.</Typography>
        </Box>
        <img width='100%' height='100%' src={img} alt={name} />

    </Stack>
}
export default function BannerSlider() {
    const [slider, setSlider] = useState()
    // get the data from slider model
    useEffect(() => {
        (async () => {
            const res = await fetchData('banners?populate=*')
            setSlider(res)
        })()
    }, [])

    const items = slider?.map((e, index) => <SwiperSlide key={index}><BannerCard name={e.attributes.name} description={e.attributes.description} img={import.meta.env.VITE_URL + e?.attributes?.image?.data[0]?.attributes?.url} /></SwiperSlide>)
    return (
        <>
            <Stack direction={'row'} sx={{
                width: '100%',
                height: '600px',
            }} >
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    className="banner"
                    autoplay={{
                        delay: 2000
                    }}
                >

                    {
                        items
                    }
                </Swiper>
            </Stack>
        </>
    );
}
