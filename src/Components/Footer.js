import { Email, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../Styles/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Twitter/>
            {/* <Facebook/> */}
            <Link to='mercywmuriithi.mm@gmail.com'><Email/></Link>
            <LinkedIn/>
          
        </div>
        <p> &copy; 2023 <Link to='https://my-portfolio-phi-sepia-37.vercel.app/'>Mercy Muriithi</Link>
        </p>
    
    </div>
  )
}

export default Footer