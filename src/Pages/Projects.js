import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import "../Styles/Project.css"

import shopIG from "../assets/ShopIG.png"

function Projects() {
  return (
    <div className='projects'>
    <h1>My Personal Projects</h1>
    <div className='projectList'>
      
      <ProjectItem name="Shop-IG E-commerce Website" image={shopIG}/>
    </div>
    </div>
  )
}

export default Projects