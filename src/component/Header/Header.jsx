import React, { useRef } from 'react'
import './Header.css'
const Header = () => {

  const slide = useRef(null)
  let val = 1
  const slider = () => {

    console.log('run')
    slide.current.style.transform = `translateX(-${100 * val}%) `
    slide.current.style.transition = `all 0.4s `


  }

  setInterval(() => {
    slider()
    if (val === 3) {
      val = -1
    }
    val += 1


  }, 3000)

  return (

    <div className="header">



      <div className="some_images">
        <div className="slide" ref={slide}>
          <div className="child">
            <div className='c1'>
              <h1>SUPER SAVING EVERY MONTH</h1>
              <p>Upto 30% off</p>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="child">
          <div className='c2'>
          <h1>DAILY ESSENTIAL ITEMS</h1>
              <p>Upto 10% off</p>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="child">
          <div className='c3'>
          <h1>COVID ESSENCIAL PRODUCTS</h1>
              <p>Upto 20% off</p>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="child">
          <div className='c4'>
          <h1>COOKING ESSENTIAL PRODUCT</h1>
              <p>Upto 10% off</p>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header