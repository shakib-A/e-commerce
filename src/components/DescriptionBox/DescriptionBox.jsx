import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione blanditiis sed laudantium ab itaque iste quasi modi deleniti qui.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam enim esse possimus commodi est velit suscipit ipsum itaque incidunt illum alias rem voluptatibus facere, excepturi reiciendis expedita quidem molestiae consequatur.</p>
        </div>
    </div>
  )
}

export default DescriptionBox