import { useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";
import { Button } from "../../components/Button/Button";
import styled from "styled-components"
import colors from "../../color";


const traduction = {
    pageTitle: {
        EN: "About me",
        FR: "À propos"
    },
    downloadButton: {
      EN: "Download Resume",
      FR: "Télécharger CV"
    }
}
const HeaderAbout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.second};
  color: ${colors.white};
  padding: 6rem 0 2rem 0;
  height: 20vh;
`
const ResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${colors.third};
  color: ${colors.first};
 
  height: 80vh;
`
export function About() {
  const language = useSelector((state: RootState) => state.languageSlice.language)

  const downloadResume = ()=> {
    const url = "http://localhost:5173/CV_Grammatico_Madeline.pdf"
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const FileName = "CV_Grammatico_Madeline.pdf"
        const aTag = document.createElement("a")
        aTag.href = blobURL
        aTag.setAttribute("download", FileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
      })
  }
  return (
    <main>
      <Nav/>
        <HeaderAbout>
          <h1>{traduction.pageTitle[language]}</h1>
        </HeaderAbout>
        <ResumeContainer>
        <Button onClick={()=> downloadResume()}>{traduction.downloadButton[language]}</Button>
        </ResumeContainer>
    </main>
  )
}
