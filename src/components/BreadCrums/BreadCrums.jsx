import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'

const BreadCrums = ({ product }) => {
  return (
    <div className='breadcrums'>
        HOME 
        <img src={arrow_icon} alt="arrow icon" /> SHOP 
        <img src={arrow_icon} alt="arrow icon" /> {product.category} 
        <img src={arrow_icon} alt="arrow icon" /> {product.name}
    </div>
  )
}

export default BreadCrums