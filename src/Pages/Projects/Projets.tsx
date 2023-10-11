import { RootState } from "../../app/store";
import { Nav } from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { 
    // ProjectType, 
    filterProjects, 
    initializeProjects 
} from "../../app/projectsSlice/projectsSlice";
import { addFilter, initilizeFilter, removeFilter } from "../../app/filtersSlice/filtersSlice";
import { useEffect } from "react";
import { Project } from "../../components/Project/Project";

const traduction = {
    pageTitle: {
        EN: "Projects",
        FR: "Projets"
    }
}
export function Projects() {
    const projects = useSelector((state: RootState) => state.projectsSlice.projects)
    const filters = useSelector((state: RootState) => state.filtersSlice.filters)
    const language = useSelector((state: RootState) => state.languageSlice.language)
    const dispatch = useDispatch()
    
    const tablTechno: string[] = []
    const selectTechnos = () => {
        projects.map((project) => {
            project.technos.map((techno) => {
                (tablTechno.includes(techno) || filters.includes(techno))? null : tablTechno.push(techno)
            })
        })
    }
    
    selectTechnos()
    
    const filterByTechno = (e: React.MouseEvent<HTMLElement> ) => {
        e.preventDefault()
        const p = e.target as HTMLElement
        dispatch(addFilter(p.innerText))
    }

    useEffect(() => {
        dispatch(initializeProjects())
        dispatch(filterProjects(filters))
    }, [filters, dispatch])

    const resetProjects = () => {
        dispatch(initializeProjects())
        dispatch(initilizeFilter())
    }

    const removeFilterElement = (e: React.MouseEvent) => {
        const span = e.target as HTMLElement
        dispatch(removeFilter(span.innerHTML))
        selectTechnos()
    }
    
    return (
        <main>
            <Nav/>
            <h1>{ traduction.pageTitle[language] } 
                {filters.map((filter, index) => 
                    <span onClick={(e) => removeFilterElement(e)} key={index}>{filter}</span>
                )}
            </h1>
            <div>
                <input type="search"></input>
                <div>
                    {
                        tablTechno.map((techno, index)=> {
                            return <p onClick={(e)=>filterByTechno(e)} key={index}>{techno}</p>
                        })
                    }
                </div>
            </div>
            <button onClick={()=> resetProjects()}>reset</button>

            { projects.map((project, index) => {
                return <Project project={project} key={index} ></Project>
            })}

        </main>
    )
}
  