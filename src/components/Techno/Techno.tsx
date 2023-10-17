import styled from "styled-components"
import colors from "../../color"
const TechnoStyled = styled.span`
      display: flex;
      justify-content: center;
      align-items: center;
      /* background-color: white; */
      color: ${colors.first};
      padding: 0.8rem;
      border-radius: 2rem;
      min-width: 6rem;
      border: solid 4px ${colors.first};
        /* cursor: pointer;
        &:hover {
            color: white;
            background-color: hotpink
        } */
    `
export function Techno({children}) {
    
  return (
    <TechnoStyled>{children}</TechnoStyled>
  )
}
