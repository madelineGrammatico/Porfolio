import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../../app/store";
import styled from "styled-components";
import colors from "../../color";
import { Nav } from "../../components/Nav/Nav";
import { ButtonLink } from "../../components/Button/ButtonLink";
import { Technos } from "../../components/Technos/Technos";
import { ProjectType } from "../../app/projectsSlice/projectsSlice";

export default function ProjectPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const language = useSelector((state: RootState) => state.languageSlice.language)
    const projects = useSelector((state: RootState) => state.projectsSlice.projects)
    let projectId: number
    id? projectId = parseInt(id): navigate("/portfolio/projects")
    const project = projects.find((projectItem) => {  
       return projectItem.id === projectId
    })
    project? project as unknown as ProjectType : navigate("/portfolio/projects/")
    const linkGithub = project?.links.github
    const linkSite = project?.links.web

    const ProjectHeader= styled.div`
        background: linear-gradient(180deg, ${colors.first} 2%, ${colors.second} 80%);
        padding: 6rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: ${colors.white}
    `
    const ProjectLinks = styled.div`
        display:flex;
        flex-direction: row;
        gap: 2rem;
    `
    const ProjectBody = styled.div`
        background-color: ${colors.third};
        padding: 2rem;
        color: ${colors.white};
        display: flex;
        flex-direction: column;
        flex: 1 100%
    `
    return (
        <main>
            <Nav/>
            <ProjectHeader>
                <h1>{ project?.name }</h1>
                { project?.formation && <p>{ project?.formation }</p> }
                <ProjectLinks>
                    { linkSite && <ButtonLink type="primary" to={ linkSite }>Website</ButtonLink> }
                    { linkGithub && <ButtonLink type="secondary" to={ linkGithub }>Github</ButtonLink> }
                </ProjectLinks>
            </ProjectHeader>
            <Technos data={ project?.technos }/>
            <ProjectBody>
                <span>{ project?.descriptions[language] }</span>
                <ol>
                    { project?.skills[language].map((skill, index) => {
                    return  <li key={ "skill" + index }>{skill}</li>
                    }) }
                </ol>
            </ProjectBody>
            
            
        </main>
        
  )
}
