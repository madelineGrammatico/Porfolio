import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

import styled from "styled-components"
import colors from "../../color";

import { ProjectCard } from "../ProjectCard/ProjectCard";

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 6rem 2rem ;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: ${colors.third};
  flex: 1 100%;
  
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr ;
    padding: 6rem;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr;
    padding: 6rem 10rem;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 6rem 2rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 6rem;
  }
  @media screen and (min-width: 1400px) {
    padding: 6rem 10rem;
  }
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
