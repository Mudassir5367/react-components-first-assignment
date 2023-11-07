import React from 'react'
import image from '../components/Images/candle.jpg'

export default function Image() {
  return (
    <div>
      <img src={image} alt='image not found' style={{width:"100%", height:'auto', objectFit:'contain'}}></img>
    </div>
  )
}
