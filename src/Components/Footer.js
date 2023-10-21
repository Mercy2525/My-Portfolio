import { Email, LinkedIn, GitHub } from '@mui/icons-material'
import React from 'react'
import "../Styles/Footer.css"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to='https://ke.linkedin.com/in/mercy-w-muriithi-060658165'><LinkedIn/></Link>
            <Link to='https://github.com/Mercy2525'><GitHub/></Link>
            <Link to='mailto:mercywmuriithi.mm@gmail.com'><Email/></Link>           
           
        </div>
        <p> &copy; 2023 <Link to='https://github.com/Mercy2525'>Mercy Muriithi</Link>
        </p>
    
    </div>
  )
}

export default Footer