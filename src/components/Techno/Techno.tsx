import styled from "styled-components"
import colors from "../../color"
const TechnoStyled = styled.span`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.second};
      font-size: 0.9rem;
      font-weight: 900;
      padding: 0.4rem 0.6rem;
      border-radius: 2rem;
      min-width: 5rem;
      border: solid 4px ${colors.second};
      @media screen and (min-width: 400px){
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.second};
        font-weight: 900;
        padding: 0.8rem 1rem;
        border-radius: 2rem;
        min-width: 5rem;
        border: solid 4px ${colors.second};
      }
    `
export function Techno({children}: {children: string}) {
    
  return (
    <TechnoStyled>{children}</TechnoStyled>
  )
}
