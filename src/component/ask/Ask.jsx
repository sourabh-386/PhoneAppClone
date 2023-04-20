import React, { useState } from 'react'
import './Ask.css'
import ask from '../../images/ask.png'
import { List } from '../../data/option_list'
const Ask = () => {

const [state,setstate]=useState(false)

  return (
    <div>

      <div className="ask" >
        <img src={ask} alt="img" onClick={()=>setstate(!state)} />
      </div>
      <div className={`ask_list ${!state?'':'ask_list_1'}`} >
        <br />
      <center><h2>Choose Any Service</h2></center>

        <div className="list">
          
        {
          List.map(data=>{
            return(
              <div><input type="checkbox" name="" id="" />{data}</div>
            )
          })
        }

        </div>
        <div className="list_bottom">
          <p onClick={()=>setstate(!state)}>CANCLE</p>
          <p onClick={()=>setstate(!state)}>OK</p>
        </div>

      </div>
    </div>
  )
}

export default Ask