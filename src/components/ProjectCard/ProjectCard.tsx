import { ProjectType } from '../../app/projectsSlice/projectsSlice';
import { ProjectDefault } from './ProjectDefault';

import { ProjectFav } from "./ProjectFav";

export function ProjectCard({ project } : { project: ProjectType } ) {
    const typeofCard = project.favorite === true ? 
        <ProjectFav project={project}/>
    :
        <ProjectDefault project={project}/>
   
    return (typeofCard)
}