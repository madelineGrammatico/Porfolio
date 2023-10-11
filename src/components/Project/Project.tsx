import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ProjectType } from '../../app/projectsSlice/projectsSlice';

export function Project({ project } : { project: ProjectType } ) {
    const language = useSelector((state: RootState) => state.languageSlice.language)
    return (
    <section>
        <header>{ project.name }</header>
        <p>{ project.descriptions[language]}</p>
        <ol>
            { project.skills[language].map((skill: string, index: number)=> {
                return <li key={ project.id + "skill" + index }>{ skill }</li>
            })}
        </ol>
        <ul>
            { project.technos.map((techno: string, index: number) => {
                return <li key={ project.id + "techno" + index }>{ techno }</li>
            })}
        </ul>
    </section>
  )
}