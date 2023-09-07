import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import "../Styles/Project.css"
import proj1 from "../assets/proj1.jpg"
import movie from "../assets/movie.jpg"
import shopIG from "../assets/shopIG.jpg"

function Projects() {
  return (
    <div className='projects'>
    <h1>My Personal Projects</h1>
    <div className='projectList'>
      <ProjectItem name="Social Media Website" image={proj1}/>
      <ProjectItem name="Ticket-Booking Website" image={movie} />
      <ProjectItem name="E-commerce Website" image={shopIG}/>
    </div>
    </div>
  )
}

export default Projects