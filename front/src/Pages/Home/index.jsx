import React from 'react'
import BannerSlider from './BannerSlider'
import PopularSlider from './PopularSlider'

export default function Home({theme}) {
  return (
    <>
      {/* banner slider */}
      <BannerSlider />
      {/* popular slider */}
      <PopularSlider theme={theme}/>
    </>
  )
}
