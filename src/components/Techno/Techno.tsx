import styled from "styled-components"
import colors from "../../color"
const TechnoStyled = styled.span`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.first};
      font-weight: 900;
      padding: 0.8rem;
      border-radius: 2rem;
      min-width: 6rem;
      border: solid 4px ${colors.first};
    `
export function Techno({children}: {children: string}) {
    
  return (
    <TechnoStyled>{children}</TechnoStyled>
  )
}
