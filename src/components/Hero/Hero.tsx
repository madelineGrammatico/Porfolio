import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components"
import colors from "../../color";
import { ButtonLink } from "../../components/Button/ButtonLink";
import { theme } from "../../theme/theme";

const HeroStyled = styled.section`
  /* background-color: ${colors.third}; */
    color: white;
    background:  linear-gradient(180deg, ${colors.first} 0%, ${colors.third} 70%);
    overflow:hidden;
    display: grid;
    grid-template-columns: 1rem 1fr 1rem;
    grid-template-rows: 2rem auto auto auto 2rem;
    justify-content: center;
    align-items: center;
    z-index:2;

  @media screen and (min-width: 1000px) {
    min-height: 77vh;
    grid-template-columns: 2fr 0.2fr 4fr 0.2fr 2fr;
    grid-template-rows: 3fr 2fr auto auto auto 2fr 3fr;
    flex-direction: row;
    
  }
`
const HeroTitle = styled.section`
  height: 100%;
  width:100%;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index:4;
  padding: 1rem;
  grid-column: 2;
  grid-row: 2;
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
    padding: 2rem;
  }
  @media screen and (min-width: 1000px) {
    grid-column: 3;
    grid-row: 3;
    justify-content: space-between;
    padding: 2rem;
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`
const HeroProfil = styled.div`
  flex-flow: wrap;
  display: flex;
  flex-direction: row;
  grid-column: 2;
  grid-row: 3;
  padding: 1rem;
  max-width:100vw;
  p  {
    flex: 1 100%

  }
  @media screen and (min-width: 1000px) {
    flex-flow: wrap;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    grid-column: 3;
    grid-row: 4;
    padding: 0 2rem;
    height:100%
  }
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-row: 4 ;
  grid-column: 2;
  padding: 1rem;
  gap: 1rem;
  .buttonsSecondary{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media screen and (min-width: ${theme.mediaSize.XS}) {
    flex-wrap: nowrap;
    padding: 2rem;

    .buttonsSecondary {
    flex-wrap: nowrap;
    }
  }
  @media screen and (min-width: 1000px) {
    grid-row: 5 ;
    grid-column: 3;
    padding: 2rem 2rem 0 2rem;
  }
`
const BackgroundHero = styled.div`
  background:  linear-gradient(180deg, ${colors.first} 2%, ${colors.second} 60%);
  grid-row: 1/span 3;
  grid-column: 2;
  border-radius: 0 0 18px 18px;
  max-width: 100vw; 
  height: 100%;
  @media screen and (min-width: 1000px) {
    display: inherit;
    display:block;
    grid-row: 1/span 6;
    grid-column: 2/span 3;
    
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
          EN: "What sets me apart is my creativity, adaptability, and constant desire to learn and innovate. I am determined to expand my development skills while bringing a creative touch to each of your projects.",
          FR: "Ce qui me différencie, ce sont ma créativité, mon adaptabilité et mon désir constant d'apprendre et d'innover. Je suis déterminée à élargir mes compétences en développement tout en apportant une touche créative à chacun de vos projets.",
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
      <HeroTitle>
        <h1>Madeline Grammatico</h1>
        <h2>{ traduction.heroJob[language].toUpperCase() }</h2>
        
      </HeroTitle>
      <BackgroundHero></BackgroundHero>
      <HeroProfil>
        <p>{ traduction.heroIntroduction[language] }</p>
      </HeroProfil>
      <LinkContainer>
        <ButtonLink type="primary" to="/portfolio/about">{ traduction.heroButton[language]}</ButtonLink>
        <div className="buttonsSecondary">
          <ButtonLink type="outSite" to="https://www.linkedin.com/in/madeline-grammatico-06012015a/">Linkedin</ButtonLink>
          <ButtonLink type="outSite" to="https://github.com/madelineGrammatico">Github</ButtonLink>
        </div>
      </LinkContainer>
    </HeroStyled>
  )
}
