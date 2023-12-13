
import styled from "styled-components";
import { Techno } from "../Techno/Techno";
import colors from "../../color";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ButtonLink } from "../Button/ButtonLink";
const technosDataDefault = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "Vite",
  "React Router",
  "SASS",
  "CSS Modules",
  "HTML",
  "CSS",
  "JavaScript",
  "Jest",
]

const traduction = {
  technosIUse: {
    EN: "The technologies I use most often :",
    FR: "Les technologies que j'utilise le plus souvent :"
  },
  notOnly: {
    EN: "but not only...",
    FR: "Mais pas que..."
  },
  buttonForFilters: {
    EN: "See all technologies",
    FR: "Toutes les technologies"
  }
}

const Container= styled.section`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
  padding: 2rem;
  /* gap: 1rem; */
  background-color: ${colors.white};
  color: ${colors.second};
  font-weight: 900;

  @media screen and (min-width: 1000px){
  padding: 4rem 6rem;
  /* gap: 1rem; */

  }
`

const TechnosContainer = styled.section`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  /* padding: 0 1.7rem; */
  @media screen and (min-width: 1000px){
    gap: 1rem 1.3rem;
    padding:  0.8rem 4rem;
    justify-content: center;
  }
`
const CallToActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-top: 1rem
`

export function Technos({data = technosDataDefault, isCallAction = false}) {
  console.log("data : ", data)
  console.log("default : ", technosDataDefault)
  const language = useSelector((state: RootState) => state.languageSlice.language)
  return (
    <Container>
      { isCallAction && <p>{traduction.technosIUse[language]}</p>}
      <TechnosContainer>
        { data.map((techno, index)=>{
            return <Techno key={"techno"+ index}>
              {techno}
            </Techno>
        })}
        { isCallAction && <p>{traduction.notOnly[language]}</p>}
      </TechnosContainer>
      { isCallAction && <CallToActionWrapper>
        
        <ButtonLink to="/portfolio/projects">{traduction.buttonForFilters[language]}</ButtonLink>
      </CallToActionWrapper>}
      
    </Container>
  )
}
