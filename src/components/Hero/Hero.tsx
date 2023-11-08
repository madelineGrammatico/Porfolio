import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components"
import colors from "../../color";
import { ButtonLink } from "../../components/Button/ButtonLink";

const HeroStyled = styled.section`
  background-color: ${colors.second};
  color: white;
  height: 77vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto 1fr;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const HeroProfile = styled.section`
  height: 100%;
  color: ${colors.first};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  /* width: 40%; */
  padding: 0 5rem;
  grid-column: 1;
  grid-row: 2;
  z-index:2;
  h1{
    margin:0;
  }
  h2 {
    margin:0;
    padding: 0
  }
  
`
const HeroSecond = styled.div`
  flex-flow: wrap;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start;
  align-items: start; */
  grid-column: 2;
  grid-row: 2;
  gap: 1rem;
  padding:  0 5rem;
  height:100%
  /* width: 60%; */
  p  {
    flex: 1 100%

  }
`
const BackgroundRight = styled.div`
  background-color: ${colors.third};
  grid-row: 1 /span 3;
  grid-column: 1;
  width: 100%;
  height: 100%;
  z-index:1;
  content: " ";
`
export function Hero() {
   
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
        },
        heroButton: {
          EN:"Resume",
          FR:"Voir CV"
        },
        heroSecondButton: {
          EN:"See all my projects",
          FR:"Voir tous mes projects"
        },
    }
    
    const language = useSelector((state: RootState) => state.languageSlice.language)

  return (
    <HeroStyled>
      <HeroProfile>
        <h1>Madeline Grammatico</h1>
        <h2>{ traduction.heroJob[language].toUpperCase() }</h2>
        
      </HeroProfile>
      <BackgroundRight></BackgroundRight>
      <HeroSecond>
        <p>{ traduction.heroIntroduction[language] }</p>
        <ButtonLink type="primary" to="/About">{ traduction.heroButton[language]}</ButtonLink>
        {/* <ButtonLink type="secondary" to='/Projects'>{ traduction.heroSecondButton[language]}</ButtonLink> */}
        <ButtonLink type="outSite" to="https://www.linkedin.com/in/madeline-grammatico-06012015a/">Linkedin</ButtonLink>
        <ButtonLink type="outSite" to="https://github.com/madelineGrammatico">GitHub</ButtonLink>
      </HeroSecond>
    </HeroStyled>
  )
}
