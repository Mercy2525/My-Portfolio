import { useParams,Link } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList'
import { GitHub } from "@mui/icons-material";
import '../Styles/ProjectDisplay.css'


function ProjectDisplay(){
    const {id}=useParams()
    const project=ProjectList[id];

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img alt={project.name} src={project.image}/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <Link to={project.github}><GitHub/></Link>
            
        </div>
    );
}

export default ProjectDisplay