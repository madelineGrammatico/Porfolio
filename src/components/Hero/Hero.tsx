import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components"
import colors from "../../color";
import { ButtonLink } from "../../components/Button/ButtonLink";

const HeroStyled = styled.section`
  background-color: ${colors.second};
    color: white;
    min-height: 77vh;
    overflow:hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index:2;
  @media screen and (min-width: 1000px) {
    
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr auto 1fr;
    flex-direction: row;
    
  }
`
const HeroLeft = styled.section`
  height: 100%;
  max-width:100vw;
  width:100%;
  color: ${colors.first};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index:4;
  padding: 3rem 2rem 2rem 2rem;
  grid-column: 1;
  grid-row: 1;
  h1{
    margin:0;
    font-size: 2.7rem;
    font-weight: 900;
  }
  h2 {
    margin:0;
    padding: 0;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 5rem;
    grid-column: 1;
    grid-row: 2;
    justify-content: space-between;
    padding: 6rem 2rem 2rem 2rem;
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`
const HeroRight = styled.div`
  flex-flow: wrap;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start;
  align-items: start; */
  grid-column: 1;
  grid-row: 2;
  gap: 1rem;
  padding: 2rem;
  max-width:100vw;
  /* height:100% */
  /* width: 60%; */
  p  {
    flex: 1 100%

  }
  @media screen and (min-width: 1000px) {
    flex-flow: wrap;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    grid-column: 2;
    grid-row: 2;
    gap: 1rem;
    padding:  0 5rem;
    height:100%
  }

`
const BackgroundLeft = styled.div`
  background-color: ${colors.third};
  grid-row: 1 ;
  grid-column: 1;
  /* width: 100%; */
  max-width: 100vw; 
  height: 100%;
  /* z-index:3; */
  /* content: " "; */
  @media screen and (min-width: 1000px) {
    display:block;
    grid-row: 1/span 3 ;
    grid-column: 1;
    
  }
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
      <HeroLeft>
        <h1>Madeline Grammatico</h1>
        <h2>{ traduction.heroJob[language].toUpperCase() }</h2>
        
      </HeroLeft>
      <BackgroundLeft></BackgroundLeft>
      <HeroRight>
        <p>{ traduction.heroIntroduction[language] }</p>
        <ButtonLink type="primary" to="/About">{ traduction.heroButton[language]}</ButtonLink>
        {/* <ButtonLink type="secondary" to='/Projects'>{ traduction.heroSecondButton[language]}</ButtonLink> */}
        <ButtonLink type="outSite" to="https://www.linkedin.com/in/madeline-grammatico-06012015a/">Linkedin</ButtonLink>
        <ButtonLink type="outSite" to="https://github.com/madelineGrammatico">GitHub</ButtonLink>
      </HeroRight>
    </HeroStyled>
  )
}
