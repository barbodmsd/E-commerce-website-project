import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/fetchData'
import { Box, Stack, Typography } from '@mui/material'
import 'atropos/atropos.css'
import Atropos from 'atropos/react'
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
      <Stack justifyContent={'center'} gap={'30px'} sx={{ p: '20px 70px' }}>
        {/* name */}
        <Box><Typography color={'txt.two'} fontSize={'2rem'} fontWeight={'bolder'}>{product?.attributes?.name}</Typography></Box>
        {/* description */}
        <Box ><Typography sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>{product?.attributes?.description}</Typography></Box>
        {/* image atropos */}
         {/* <Stack justifyContent={'center'} width={'100%'} height={'600px'} direction={'row'} > */}
         <Stack
          className={"atropos"}
          component={Atropos}
          justifyContent={'center'}
          direction={'row'}
          sx={{
            width: 500,
            height: 500,
            // p:'20px',
            overflow:'hidden'
          }}
        >
 <Box className={"atropos-scale"}>
          <Box className={"atropos-rotate"}>
            <Box className={"atropos-inner"}>
              <img
                src={import.meta.env.VITE_URL + product?.attributes?.image?.data[0]?.attributes?.url}
                data-atropos-offset="-5"
                width="100%"
                height="100%"
              />
              {/* <Box
                sx={{
                  position: "absolute",
                  bottom: "11%",
                  left: "7%",
                }}
              >
                <Typography
                data-atropos-offset='0' data-atropos-opacity="0.8;0.2"
                  sx={{
                    color: "txt.three",
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                  }}
                >
                  CAR 
                </Typography>
               
              </Box>
              <Box sx={{
                  position: "absolute",
                  bottom: "7%",
                  left: "7%",
                }}>
              <Typography
                data-atropos-offset='8'
                  sx={{
                    color: "txt.three",
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                  }}
                >
                   DRIVER
                </Typography>
              </Box> */}
            </Box>
          </Box>
        </Box> 
        {/* </Stack> */}
        </Stack>
      </Stack>
    </>
  )
}
//  <Box className={"atropos-scale"}>
//           <Box className={"atropos-rotate"}>
//             <Box className={"atropos-inner"}>
//               <img
//                 // src={"src/assets/dog.webp"}
//                 data-atropos-offset="-5"
//                 width="100%"
//                 height="100%"
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: "11%",
//                   left: "7%",
//                 }}
//               >
//                 <Typography
//                 data-atropos-offset='0' data-atropos-opacity="0.8;0.2"
//                   sx={{
//                     color: "white",
//                     fontSize: "1.5rem",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                   CAR 
//                 </Typography>
               
//               </Box>
//               <Box sx={{
//                   position: "absolute",
//                   bottom: "7%",
//                   left: "7%",
//                 }}>
//               <Typography
//                 data-atropos-offset='8'
//                   sx={{
//                     color: "white",
//                     fontSize: "1.5rem",
//                     fontWeight: "bolder",
//                   }}
//                 >
//                    DRIVER
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box> 