import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

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
    project? null : navigate("/portfolio/projects/")
    const linkGithub = project?.links.github
    const linkSite = project?.links.web
  return (
        <>
            <header>{project?.name}</header>
            <div>{project?.descriptions[language]}</div>
            {project?.formation && <div>{project?.formation}</div>}
            <ol>
                {project?.skills[language].map((skill, index) =>{
                   return  <li key={"skill" + index}>{skill}</li>
                })}
            </ol>
            <ul>
                {project?.technos.map((techno, index) => {
                    return <li key={"techno" + index}>{techno}</li>
                })}
            </ul>
            <div>
                { linkGithub && <Link to={linkGithub}>Github</Link> }
                { linkSite && <Link to={linkSite}>Website</Link> }
            </div>
        </>
        
  )
}
