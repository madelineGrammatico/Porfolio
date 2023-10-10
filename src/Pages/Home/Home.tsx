import { useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";
import { Project } from "../../components/Project/Project";
import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import Technos from "../../components/Technos/Technos";
import colors from "../../color";
import { Button } from "../../components/Button/Button";


const ProjectsContainer = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
padding: 6rem 10rem ;
background-color: ${colors.third}
`
export function Home() {
  const projects = useSelector((state: RootState) => state.projectsSlice.projects)
  const favorites = projects.filter((project) => { return project.favorite === true})

  return (
    <main>
      <Nav/>
      <Hero/>
      <Technos/>
      
      <ProjectsContainer>
        { favorites.map((favorite, index) => {
          return <Project project={ favorite } key={ index } ></Project>
        }) }
        <Button>Tout les projets</Button>
      </ProjectsContainer>
        
    </main>
  )
}
