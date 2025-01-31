import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ProjectType } from '../../app/projectsSlice/projectsSlice';
import styled from "styled-components";
import colors from "../../color";
import { Link } from "react-router-dom";


const ProjectStyled = styled.article`
    border-radius: 18px;
    cursor: pointer;
    overflow: hidden;
    border: solid 4px transparent;
    &:hover {
        border: solid 4px ${colors.fourth};
        /* color: ${colors.fourth}; */
        box-shadow: 0 0 15px rgb(50, 50, 50);
        header {
            color: ${colors.fourth};
        }
    }
`
const ProjectDescription = styled.div`
    padding: 1rem 1rem 1rem 1.5rem;
    box-shadow: 2px 0px 3px ${colors.second};
    background:  linear-gradient(170deg, ${colors.second} 10%, ${colors.first} 97%);
    z-index: 9;
    header {
    font-size: 1.5rem;
    font-weight: 900;
    }

    ul, li {
        font-size: .9rem;
        /* list-style-type: none; */
        padding:0;
    }
    @media screen and (min-width: 500px) {
        padding: 1rem 2rem;
    }
`
const ProjectTechnos = styled.div`
    background-color: ${colors.white};
    color: ${colors.second};
    padding: 1rem 0.5rem 1rem 2rem;
    ul {
        display: grid;
        flex-direction: row;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0 1rem;
        /* list-style-type: none; */
        padding:0;
        margin:0;
        font-size:0.9rem;
    }
    @media screen and (min-width: 500px) {
        padding: 1rem 0.5rem 1rem 2rem;
        ul {
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            list-style-type: inherit;
        }
    }
`
const LinkToProject = styled(Link)`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    color: ${colors.white};
    overflow: hidden;
    height: 100%;
    @media screen and (min-width: 500px) {
        display: grid;
        grid-template-columns: 3fr 1.2fr;
        grid-template-rows: 1fr;
        
    }
`
export function ProjectFav({project}: { project: ProjectType }) {
    const language = useSelector((state: RootState) => state.languageSlice.language)
    // const link = (project.links.web)? project.links.web : project.links.github
    const link = `/projects/${project.id}`
    return(
    <ProjectStyled>
        <LinkToProject to={link}>
            <ProjectDescription>
                <header>{ project.name }</header>
                <p>{ project.descriptions[language]}</p>
                <ol>
                    { project.skills[language].map((skill: {skill: string, desc: string}, index: number)=> {
                        return <li key={ project.id + "skill" + index }>{ skill.skill }</li>
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
        </LinkToProject>
    </ProjectStyled>
    )
}