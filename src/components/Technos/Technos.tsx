
import styled from "styled-components";
import { Techno } from "../Techno/Techno";
import colors from "../../color";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
const technosData = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "React Router",
  "Vite",
  "CSS Modules",
  "SASS",
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
  buttonForFilters: {
    EN: "See all technologies",
    FR: "Voir toutes les technologies"
  }
}

const TechnosContainer = styled.section`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
gap: 1.3rem;
width: 100%;
padding:  0 4rem;
color: ${colors.first};

`
const Container= styled.section`
display: flex;
flex-flow: column;
justify-content: flex-start;
align-items: start;
padding: 6rem;
gap: 2rem;
`
const LinkStyled = styled.button`
padding: 1.2rem;
color: white;
background-color: ${colors.fourth}; 
border-radius: 5px;

`
const CallToActionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self:center;
`
export default function Technos() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  return (
    <Container>
      <p>{traduction.technosIUse[language]}</p>
      <TechnosContainer>
          { technosData.map((techno, index)=>{
              return <Techno key={"techno"+ index}>
                {techno}
              </Techno>
          })}
          <p>Mais pas que ...</p>
      </TechnosContainer>
      <CallToActionWrapper>
        
        <LinkStyled>{traduction.buttonForFilters[language]}</LinkStyled>
      </CallToActionWrapper>
      
    </Container>
  )
}
