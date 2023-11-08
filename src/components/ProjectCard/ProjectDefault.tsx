import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ProjectType } from '../../app/projectsSlice/projectsSlice';
import styled from "styled-components";
import colors from "../../color";

const ProjectStyled = styled.article`
display: grid;
grid-template-columns: 3fr 1.2fr;
background:  ${colors.third};
color: ${colors.white};
overflow: hidden;
border-radius: 18px;
border: 3px solid ${colors.white};
/* box-sizing: content-box; */
cursor: pointer;
overflow: hidden;
&:hover {
  color: ${colors.fourth};
  box-shadow: 0 0 15px rgb(50, 50, 50);
  div {
    color: ${colors.fourth};
  }
}
`
const ProjectDescription = styled.div`
    padding: 1rem 2rem;
    box-shadow: 2px 0px 3px ${colors.second};
    z-index: 9;
    header {
        font-size: 1.5rem;
        font-weight: 900;
    }

    ul, li {
        font-size: .9rem
    }
`
const ProjectTechnos = styled.div`
    background-color: ${colors.white};
    color: ${colors.third};
    padding: 2rem 1rem rem 0rem;
    font-size:0.9rem;
    
`
export function ProjectDefault({project}: { project: ProjectType }) {
    const language = useSelector((state: RootState) => state.languageSlice.language)
    return(
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