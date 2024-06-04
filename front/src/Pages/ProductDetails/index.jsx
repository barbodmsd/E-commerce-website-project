import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchData from '../../Utils/fetchData'
import { Box, Button, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import 'atropos/atropos.css'
import Atropos from 'atropos/react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Store/Slices/cartSlice'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
// cart icon
export const CartIcon = ({ theme, icon, click }) => {
  return <Stack alignItems={'center'} justifyContent={'center'} sx={{
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: theme == 'light' ? '0 0px 1px 1px rgba(0,0,0,0.3)' : '0 0px 1px 1px rgba(255,255,255,0.2)',
  }}>

    <IconButton sx={{ color: 'txt.one', p: '15px' }} onClick={click}>
      {
        icon
      }
    </IconButton>

  </Stack>

}
// for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ProductDetails({ theme }) {
  const [product, setProduct] = useState()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams()
  const quantity = useSelector(state => state.cartSlice.list)?.filter(e => e.id == id)[0]?.quantity
  const dispatch = useDispatch()
  console.log({ quantity })
  const { list } = useSelector(state => state.cartSlice)
  console.log({ list })
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
          <Box><Typography fontSize={'2rem'} fontWeight={'bolder'}>{product?.attributes?.name}</Typography></Box>
          {/* description */}
          <Box ><Typography sx={{ color: theme == 'light' ? '#4f4f4f' : 'txt.three' }}>{product?.attributes?.description}</Typography></Box>
          {/* 3d card  */}
          <Stack alignItems={'center'} height={700}>
            {/* image atropos */}
            <Stack component={Atropos} className={'atropos'}
              sx={{
                width:'700px',
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
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width='100%' gap={'400px'} sx={{ p: '20px 50px' }}>
              <>
              {/* gallery */}
                <Button  sx={{color:'txt.one'}} size={'large'} onClick={handleClickOpen}>
                  GALLERY
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>Gallery</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                     <Stack justifyContent={'center'} gap={'10px'} width={'600px'}>
                      <Stack width={'200px'} height={'200px'}></Stack>
                      <Stack width={'200px'} height={'200px'}></Stack>
                      <Stack width={'200px'} height={'200px'}></Stack>
                     </Stack>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
              </>
              {/* add/remove from cart */}
              <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                {
                  quantity && <CartIcon click={() => dispatch(removeItem(product.id))} icon={quantity == 1 ? <DeleteRoundedIcon sx={{ fontSize: '2rem' }} /> : -1} theme={theme} />
                }
                {
                  quantity && <Typography component={'span'} fontSize={'2rem'}>{quantity}</Typography>
                }
                <CartIcon click={() => dispatch(addItem(product))} icon={!quantity==0? '+1':<ShoppingCartRoundedIcon sx={{ fontSize: '2rem' }} />} theme={theme} />
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
             {/* box below the atropos img */}
             <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width='100%' gap={'400px'} sx={{ p: '20px 50px' }}>
              <Skeleton width={'100px'} height={'50px'} variant={'rounded'}/>
              {/* add/remove from cart */}
              <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                {
                  quantity && <CartIcon click={() => dispatch(removeItem(product.id))} icon={quantity == 1 ? <DeleteRoundedIcon sx={{ fontSize: '2rem' }} /> : -1} theme={theme} />
                }
                {
                  quantity && <Typography component={'span'} fontSize={'2rem'}>{quantity}</Typography>
                }
                <CartIcon click={() => dispatch(addItem(product))} icon={!quantity==0? '+1':<ShoppingCartRoundedIcon sx={{ fontSize: '2rem' }} />} theme={theme} />
              </Stack>
          </Stack>
      }
    </>
  )
}




