import React from 'react'
import './Header_options.css'
import { Icons } from '../../data/icons'

const Header_options = () => {
  return (
    <div>
      <div className="header_opt">

        {
          Icons.map(data => {
            return (
              <div className="opt_data">
                <p className='icon'>{data.icon}</p>
                <p className='icon_name'>{data.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header_options