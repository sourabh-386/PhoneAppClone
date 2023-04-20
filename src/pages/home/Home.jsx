import React from 'react'
import './Home.css'
import { Top, Header, Header_options, Popular, Footer ,Service,Ask} from '../../component'
const Home = () => {
  return (
    <div >

      <Top />

      <div className="others">

        <div className="header_box">
          <Header />
        </div>
        <br />
        <div className="header_option_box">
          <Header_options />
        </div>
        <br />
      </div>

      <div className='popular_box'>
        <Popular />
      </div>

      <div className="service_box">
        <Service />
      </div>

      <div className="footer_box">
        <Footer />
      </div>

      <div className="ask_box">
        <Ask />

      </div>

    </div>
  )
}

export default Home