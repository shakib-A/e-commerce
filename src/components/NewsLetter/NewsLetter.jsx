import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusdive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='YourEmail@gmail.com' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter