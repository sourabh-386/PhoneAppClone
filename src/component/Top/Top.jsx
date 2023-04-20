import React, { useRef} from 'react'
import './Top.css'
const Top = () => {


    const value = useRef(null)

    window.addEventListener('scroll', () => {

        value.current.classList.toggle('sticky', window.scrollY > 0)

    })

    return (
        <div>
            <div className="top" ref={value}>
                <div className="top_locat">
                    <div className='top_location_name'>
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>harva panipat vikas nagar,india near gt road street no 12</p></div>

                    <div className='cart'>
                        <i class="bi bi-bell-fill"></i>
                        <i class="bi bi-cart-plus"></i>
                    </div>
                </div>
                <div className={`top_search `}>
                    <div className='top_search_cant'>
                        <p className='search'><i class="bi bi-search" ></i></p>
                        <input type="text" placeholder='Search Products ...' />
                    </div>

                    <p className='mic'><i class="bi bi-mic-fill" ></i></p>

                </div>

            </div>
          
        </div>
    )
}

export default Top