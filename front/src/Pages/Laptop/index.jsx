import React from 'react'
import VideoBanner from '../../Components/VideoBanner'
import { Box } from '@mui/material'
import SliderProducts from '../../Components/Slider'
import SliderGetKnow from '../../Components/GetKnow'

export default function Laptop({ theme }) {
  return (
    <>
      {/* video banner */}
      <VideoBanner model={'laptops'} theme={theme} />
      {/* popular laptops */}
      <SliderProducts  route={'/products/4/laptop'} title={'Popular Laptops'} theme={theme} model={'products'} field={'categories'} secondField={'id'} operator={'$eq'} value={'4'} />
      <SliderGetKnow model={'laptops'} theme={theme} title={'Get to know Laptop'} />
    </>
  )
}
