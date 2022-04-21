import { useRouter } from "next/router";
import ProjectsPage from "./projects";
import ProjectsData from "./projects.json";
function Projects(){
    const router = useRouter();
    return(
       <ProjectsPage  projects = {ProjectsData.data}/> 
    );
}

export default Projects;
