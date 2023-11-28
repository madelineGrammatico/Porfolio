import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";
import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import {Technos} from "../../components/Technos/Technos";
import colors from "../../color";
import { ButtonLink } from "../../components/Button/ButtonLink"; 
import { ProjectFav } from "../../components/ProjectCard/ProjectFav";
import { initializeProjects } from "../../app/projectsSlice/projectsSlice";
import { ScrollRestoration } from "react-router-dom";

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 6rem 2rem;
  background-color: ${colors.third};

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
const traduction = {
  buttons: { 
    toProjects: {
      EN:"All my projects",
      FR:"Tout mes projets"
    }
  }
}
export function Home() {
  const projects = useSelector((state: RootState) => state.projectsSlice.projects)
  const favorites = projects.filter((project) => { return project.favorite === true})
  const language = useSelector((state: RootState) => state.languageSlice.language)
  const dispatch  = useDispatch()
  dispatch(initializeProjects())
  return (
    <main>
      <Nav/>
      <Hero/>
      <Technos/>
      
      <ProjectsContainer>
        { favorites.map((favorite, index) => {
          return <ProjectFav project={ favorite } key={ index }/>
        }) }
        <ButtonLink to="/portfolio/projects">{traduction.buttons.toProjects[language]}</ButtonLink>
      </ProjectsContainer>
      <ScrollRestoration/>
    </main>
  )
}
