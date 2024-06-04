import { Card, CardActions, CardContent, CardMedia, Skeleton, Stack } from '@mui/material'
import React from 'react'

const loading = []
for (let i = 0; i < 8; i++) {
    loading.push(<Stack component={Card} key={i} sx={{ width: 280, height: 400, }} gap='10px'>
        <Skeleton width={'100%'} variant={'rounded'} animation={'wave'} height={'200px'} />
        <Stack p={'15px'}>
        <Skeleton width={'80px'} height={'50px'} animation={'wave'} />
            <Skeleton width={'150px'} height={'70px'} variant={'rounded'} animation={'wave'} />
            <Stack justifyContent={'end'} direction={'row'}>
                <Skeleton width={'70px'} height={'40px'} variant={'rounded'} animation={'wave'} />

            </Stack>
        </Stack>
    </Stack>)
}
// {/* <Card key={i} sx={{ width: 280, height: 400 }}>
//     <Skeleton width={'100%'} animation={'wave'} height={'200px'} />
//     {/* <CardMedia></CardMedia> */}
//     <CardContent sx={{
//         textAlign: 'left'
//     }} >
//         <Skeleton width={'80px'} height={'50px'} animation={'wave'} />
//         <Skeleton width={'150px'} height={'110px'} variant={'rounded'} animation={'wave'} />
//     </CardContent>
//     <CardActions sx={{
//         display: 'flex',
//         justifyContent: 'end'
//     }}>
//         <Skeleton width={'100px'} height={'70px'} variant={'rounded'} animation={'wave'} />
//     </CardActions>
// </Card> */}
export default function CardSkeleton() {
    return (
        <>
            <Stack width={'100%'} justifyContent={'center'} gap={'50px'} sx={{
                m: '30px auto',
                px: '70px'
            }}>
                {/* titles */}
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'30px'} flexWrap={'wrap'}>
                    {/* text */}
                    <Skeleton width={'100px'} height={'50px'} animation={'wave'} />
                    {/* sort and filter */}
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'50px'} flexWrap={'wrap'}>
                        <Skeleton width={'200px'} height={'50px'} variant={'rounded'} animation={'wave'} />
                        <Skeleton width={'50px'} height={'50px'} variant={'rounded'} animation={'wave'} />
                    </Stack>
                </Stack>
                {/* all cards */}
                <Stack direction={'row'} justifyContent={'center'} gap={'20px'} flexWrap={'wrap'}>
                    {
                        loading
                    }
                </Stack>
            </Stack >
        </>
    )
}