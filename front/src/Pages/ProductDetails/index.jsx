import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchData from '../../Utils/fetchData'
import { Box, Button, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import 'atropos/atropos.css'
import Atropos from 'atropos/react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// cart icon
export const CartIcon = ({ theme, icon }) => {
  return <Stack alignItems={'center'} justifyContent={'center'} sx={{
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: theme == 'light' ? '0 0px 1px 1px rgba(0,0,0,0.3)' : '0 0px 1px 1px rgba(255,255,255,0.2)',
  }}>

    <IconButton sx={{ color: 'txt.one', p: '15px' }} >
      {
        icon
      }
    </IconButton>

  </Stack>

}
export default function ProductDetails({ theme }) {
  const [product, setProduct] = useState()
  const { id } = useParams()
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`)
      setProduct(res)
    })()
  }, [id])
  return (
    <>
      {/* product details */}
      {
        product ? <Stack justifyContent={'center'} gap={'30px'} sx={{ p: '20px 70px' }}>
          {/* name */}
          <Box><Typography color={'txt.two'} fontSize={'2rem'} fontWeight={'bolder'}>{product?.attributes?.name}</Typography></Box>
          {/* description */}
          <Box ><Typography sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>{product?.attributes?.description}</Typography></Box>
          {/* 3d card  */}
          <Stack alignItems={'center'} height={700}>
            {/* image atropos */}
            <Stack component={Atropos} className={'atropos'}
              sx={{
                height: '500px',
              }}>
              <Stack className={'atropos-scale'}>
                <Stack className={'atropos-rotate'}>
                  <Stack className={'atropos-inner'}>
                    <img data-atropos-offset="-5" style={{ borderRadius: 15 }} src={import.meta.env.VITE_URL + product?.attributes?.image?.data[0]?.attributes?.url} width={'100%'} height={'100%'} />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "12%",
                        left: "7%",
                      }}
                    >
                      <Typography
                        data-atropos-offset='0'
                        data-atropos-opacity='0.2;0.9'
                        sx={{
                          color: "grey",
                          fontSize: "1.5rem",
                          fontWeight: "bolder",
                        }}
                      >
                        LOREM
                      </Typography>

                    </Box>
                    <Box sx={{
                      position: "absolute",
                      bottom: "8%",
                      left: "7%",
                    }}>
                      <Typography
                        data-atropos-offset='8'
                        sx={{
                          color: "grey",
                          fontSize: "1.5rem",
                          fontWeight: "bolder",
                        }}
                      >
                        IPSUM PLACEHOLDER
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            {/* box below the atropos img */}
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width='100%' gap={'600px'} sx={{ p: '20px 50px' }}>
              <Box></Box>
              <Stack direction={'row'} gap={'7px'}>
                <CartIcon theme={theme} />
                <CartIcon icon={<ShoppingCartRoundedIcon sx={{ fontSize: '2rem' }} />} theme={theme} />
              </Stack>
            </Stack>
          </Stack>
        </Stack> :
          // skeleton
          <Stack justifyContent={'center'} gap={'30px'} sx={{ p: '30px 70px' }}>
            {/* name */}
            <Skeleton variant={'rounded'} width={'150px'} height={'40px'} animation={'wave'} />
            {/* description */}
            <Stack gap={'5px'}>
              <Skeleton variant={'rounded'} width={'100%'} height={'40px'} animation={'wave'} />
              <Skeleton variant={'rounded'} width={'100%'} height={'40px'} animation={'wave'} />
              <Skeleton variant={'rounded'} width={'100%'} height={'40px'} animation={'wave'} />
            </Stack>
            {/* image atropos */}
            <Stack justifyContent={'center'} direction={'center'} height={700}>
              <Stack
                sx={{
                  width: '750px',
                  height: '500px',
                }}>
                <Skeleton variant={'rounded'} width={'100%'} height={'100%'} animation={'wave'} />
              </Stack>
            </Stack>
          </Stack>
      }
    </>
  )
}

