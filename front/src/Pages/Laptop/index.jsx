import React from 'react'
import CardDetail from '../../Components/CardDetail'
import SliderGetKnow from '../../Components/GetKnow'
import SliderProducts from '../../Components/Slider'
import VideoBanner from '../../Components/VideoBanner'
import About from './About'

export default function Laptop({ theme }) {
  return (
    <>
      {/* video banner */}
      <VideoBanner model={'laptops'} theme={theme} />
      {/* popular laptops */}
      <SliderProducts  route={'/products/4/laptop'} title={'Popular Laptops'} theme={theme} model={'products'} field={'categories'} secondField={'id'} operator={'$eq'} value={'4'} />
      {/* get to know */}
      <SliderGetKnow model={'laptops'} theme={theme} title={'Get to know Laptop'} />
      {/* about laptop */}
      <About theme={theme}/>
      {/* cards details */}
      <CardDetail model={'laptops'} />
    </>
  )
}
