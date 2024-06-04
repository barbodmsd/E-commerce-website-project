import React from 'react'
import BannerSlider from './BannerSlider'
import BgAttachment from './BgAttahment'
import SliderProducts from '../../Components/Slider'
import CategorySlider from './CategorySlider'
import MostQuestion from './Accordion'
import { Link } from 'react-router-dom'

export default function Home({ theme }) {
  return (
    <>
      {/* banner slider */}
      <BannerSlider />
      {/* popular slider */}
      <SliderProducts title={'Popular'} theme={theme} route={'/products/all-popular-products/all-categories'} model={'products'} field={'popular'} operator={'$eq'} value={true} />
      {/* bg attachment */}
      <BgAttachment />
      {/* category slider */}
      <CategorySlider />
      {/* product  slider */}
      <SliderProducts title={'Explore All'} theme={theme} model={'products'} route={'/products/all-products/all-categories'} />
      {/* accordion */}
      <MostQuestion theme={theme}/>
    </>
  )
}
