import { Stack, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/fetchData'

export default function BgAttachment() {
    const [bgImg, setImg] = useState()
    useEffect(() => {
        (async () => {
            const res = await fetchData('banners?populate=*')
            setImg(res)
        })()
    }, [])
    return (
        <>
            {
                bgImg ? <Stack my={'50px'} height={'400px'} sx={{
                    backgroundImage: `url(${import.meta.env.VITE_URL + bgImg[0]?.attributes?.image?.data[0]?.attributes?.url})`
                    , backgroundAttachment: 'fixed',
                    filter:'greyScale(50%)'
                }} >

                </Stack> : <Stack my={'50px'} height={'500px'}>
                    <Skeleton width={"100%"} height={'100%'} animation={'wave'} />
                </Stack>
            }
        </>
    )
}
