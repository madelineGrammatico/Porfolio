import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ProjectType } from '../../app/projectsSlice/projectsSlice';
import styled from "styled-components";
import colors from "../../color";

const ProjectStyled = styled.article`
display: grid;
grid-template-columns: 3fr 1.2fr;
background: linear-gradient(170deg, ${colors.second} 10%, ${colors.first} 97%);
color: white;
overflow: hidden;
border-radius: 18px;
/* box-sizing: content-box; */
cursor: pointer;
&:hover {
  color: ${colors.fourth};
  box-shadow: 0 0 15px rgb(50, 50, 50);
  div {
    color: ${colors.fourth};
  }
}
`
const ProjectDescription = styled.div`
    padding: 2rem;
    box-shadow: 2px 0px 3px ${colors.second};
    z-index: 9;
    header {
    font-size: 1.5rem;
    
}
`
const ProjectTechnos = styled.div`
    background-color:white;
    color: ${colors.second};
    padding: 2rem 2rem 2rem 0rem;
    border-radius: 0 18px 18px 0;
    z-index:8;
`
export function Project({ project } : { project: ProjectType } ) {
    const language = useSelector((state: RootState) => state.languageSlice.language)
    // const bgColor = (project.favorite)? : "#F1F1F1"
   
    return (
    <ProjectStyled>
        <ProjectDescription>
        <header>{ project.name }</header>
        <p>{ project.descriptions[language]}</p>
        <ol>
            { project.skills[language].map((skill: string, index: number)=> {
                return <li key={ project.id + "skill" + index }>{ skill }</li>
            })}
        </ol>
        
        </ProjectDescription>
        <ProjectTechnos>
        <ul>
            { project.technos.map((techno: string, index: number) => {
                return <li key={ project.id + "techno" + index }>{ techno }</li>
            })}
        </ul>
        </ProjectTechnos>
        
    </ProjectStyled>
  )
}