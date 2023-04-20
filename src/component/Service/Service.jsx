import React from 'react'
import './Service.css'
import { Services_provide } from '../../data/services'

const Service = () => {
  return (
    <div>
      <div className="service">
        <br />
        <br />
        <center>
        <h1 className='service_head'>Services We Provide</h1>
        </center>
        <br />
        <div className="service_option">
          {
            Services_provide.map(data => {
              return (
                <div className="content">
                  <h3>{data.name}</h3>
                  <p>{data.discount}% Off</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Service