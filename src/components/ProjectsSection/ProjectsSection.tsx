import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

import styled from "styled-components"
import colors from "../../color";

import { ProjectCard } from "../ProjectCard/ProjectCard";

const ProjectsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 6rem 10rem ;
    background-color: ${colors.third};
`

export function ProjectsSection() {
  const projects = useSelector((state: RootState) => state.projectsSlice.projects)
  
  return (
    <ProjectsContainer>
      { projects.map((project, index) => {
          return <ProjectCard project={project} key={index}/>
      })}
    </ProjectsContainer>
  )
}
