import { useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";
import { Project } from "../../components/Project/Project";

const traduction = {
  pageTitle: {
    EN: "Home",
    FR: "Accueil"
  },
  heroJob: {
    EN: "Front End React Developer",
    FR: "Développeuse Front-End React"
  },
  heroIntroduction: {
    EN:"Front-End Developer in transition, my previous experience in the field of art has allowed me to develop a keen sense of creativity and aesthetics. I am determined to expand my Front-End development skills while adding a creative touch to each project.",
    FR: "Développeuse Front-End en reconversion, mon expérience antérieure dans le domaine de l'art m'a permis de développer un sens aigu de la créativité et de l'esthétique. Je suis déterminée à élargir mes compétences en développement Front-End tout en apportant une touche créative à chaque projet."
  }
}
export function Home() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  const projects = useSelector((state: RootState) => state.projectsSlice.projects)
  const favorites = projects.filter((project) => { return project.favorite === true})
  return (
    <main>
      <Nav/>
      <p>{ traduction.pageTitle[language] }</p>
      <section>
        <h1>Madeline Grammatico</h1>
        <p>{ traduction.heroJob[language] }</p>
        <p>{ traduction.heroIntroduction[language] }</p>
      </section>
      { favorites.map((favorite, index) => {
        return <Project project={ favorite } key={ index } ></Project>
      }) }
    </main>
  )
}
