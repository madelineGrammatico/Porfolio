import { RootState } from "../../app/store";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
    filterProjects, 
    initializeProjects 
} from "../../app/projectsSlice/projectsSlice";
import { addFilter, initilizeFilter, removeFilter } from "../../app/filtersSlice/filtersSlice";
import { useEffect } from "react";
import styled from "styled-components"
import colors from "../../color";

const traduction = {
    pageTitle: {
        EN: "Projects",
        FR: "Projets",
    },
    filterChoice: {
        EN: "Choose a technologie as a filter :",
        FR: "Choisissez une technologie comme filtre :",
    },
    resetButton: {
        EN:"Reset Filters",
        FR: "Réinitialiser Filtres",
    }
}

const TitleFilter = styled.h1`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${colors.white};
    span {
        color: ${colors.fourth};
        background-color: ${colors.white};
        border: solid ${colors.fourth} 6px;
        padding: 1.5rem;
        border-radius: 4rem;
        cursor: pointer;
        
        &:hover{
            color: ${colors.white};
            background-color: ${colors.fourth};
        }
    }
`
const FilterContainer= styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    width: 100%;
    padding:  0 4rem 2rem 4rem;
    color: ${colors.first};
`

const HeaderProject = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 2rem;
    background-color:${colors.fourth};
    padding-top: 6rem;
    p {
        color: ${colors.white};
        font-weight: 900;
    }
`

export function Filters() {
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
        console.log(span.innerHTML)
        dispatch(removeFilter(span.innerHTML))
        selectTechnos()
    }
    return(
        <HeaderProject>
            <TitleFilter>{ traduction.pageTitle[language] } 
                { filters.map((filter, index) => 
                    <Button onClick={(e) => removeFilterElement(e)} type="filter" key={index}>{filter}</Button>
                )}
            </TitleFilter>
            <p>{traduction.filterChoice[language]}</p>
            <FilterContainer>
                {
                    tablTechno.map((techno, index)=> {
                        return <Button onClick={(e)=>filterByTechno(e)} type="tag" key={index}>{techno}</Button>
                    })
                }
            </FilterContainer>
            <Button onClick={()=> resetProjects()} type="reset">{traduction.resetButton[language]}</Button>
        </HeaderProject>
    )
}