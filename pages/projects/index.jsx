import ProjectsPage from "./projects";
import ProjectsData from "./projects.json";
function Projects(){
    
    return(
       <ProjectsPage  projects = {ProjectsData.data}/> 
    );
}

export default Projects;
