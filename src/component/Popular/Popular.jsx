import React from 'react'
import './Popular.css'
import { items, Company } from '../../data/popular'

const Popular = () => {
  return (
    <div>
      <div className="product">
        <center><h1 className='main_head'>Popular Service Products</h1></center>
        <br />
        <center><h2>Daily Needs</h2></center>
        <br />
        <div className="psp_daily">
          {
            items.map(data => {
              return (
                <div className="data_box">
                  <h1>{data.image}</h1>
                  <p>{data.name}</p>
                </div>
              )
            })
          }
        </div>
        <br />
        <br />
        <br />

        <center><h1 className='main_head'>All Popular Provider</h1></center>
        <br />
        <center><h2>Daily Needs</h2></center>
        <br />
        <div className="psp_daily">
        {
            Company.map(data => {
              return (
                <div className="data_box">
                  <h1>{data.image}</h1>
                  <p>{data.name}</p>
                </div>
              )
            })
          }
        </div>
        <br />


      </div>
    </div>
  )
}

export default Popular