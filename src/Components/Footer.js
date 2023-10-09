import { Email, Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Twitter/>
            <Facebook/>
            <LinkedIn/>
            <Email/>
        </div>
        <p> &copy; 2023 <Link to='https://my-portfolio-phi-sepia-37.vercel.app/'>Mercy Muriithi</Link>
        </p>
    
    </div>
  )
}

export default Footer