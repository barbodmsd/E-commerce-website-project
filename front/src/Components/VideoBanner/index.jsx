import { Fab, Stack } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import fetchData from '../../Utils/fetchData'

export default function VideoBanner({theme,model}) {
    const [video, setVideo] = useState()
    const [isPlay, setIsPlay] = useState(false)
    // get video
    const videoRef = useRef()
    const { current } = videoRef
    useEffect(() => {
        (async () => {
            const res = await fetchData(`${model}/1?populate=*`)
            setVideo(res)
        })()
    }, [])
    const handleClick = () => {
        if (!isPlay) {
            setIsPlay(!isPlay)
            current.play()
        } else {
            setIsPlay(!isPlay)
            current.pause()
        }
    }
    return (
        <>
            <Stack justifyContent={'center'}>
                <Stack  sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                width: '100%',
                height: '80vh',
                my: '20px',
                px: '30px',
                position: 'relative'
                
            }}>
                <video loop onClick={handleClick} controls  ref={videoRef} src={import.meta.env.VITE_URL + video?.attributes?.media?.data[0]?.attributes?.url} style={{
                    height: '100%',
                    borderRadius: '20px',
                    display:'inline-block'
                }} />
                
                </Stack>
            </Stack>
        </>
    )
}
