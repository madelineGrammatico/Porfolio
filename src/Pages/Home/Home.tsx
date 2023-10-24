import { useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";
import { Project } from "../../components/Project/Project";
import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import Technos from "../../components/Technos/Technos";
import colors from "../../color";
import { ButtonLink } from "../../components/Button/ButtonLink"; 

const ProjectsContainer = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
padding: 6rem 10rem ;
background-color: ${colors.third}
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

  return (
    <main>
      <Nav/>
      <Hero/>
      <Technos/>
      
      <ProjectsContainer>
        { favorites.map((favorite, index) => {
          return <Project project={ favorite } key={ index } ></Project>
        }) }
        <ButtonLink to="/Projects">{traduction.buttons.toProjects[language]}</ButtonLink>
      </ProjectsContainer>
        
    </main>
  )
}
