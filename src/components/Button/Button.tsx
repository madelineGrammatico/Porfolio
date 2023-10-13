import styled from "styled-components"
import colors from "../../color"
export const ButtonLink = styled.button`
    background-color: ${colors.fourth};
    /* color: ${colors.third}; */
    color: white;
    padding: 1.2rem;
    border-radius: 8px;
    box-sizing: border-box;
    width: fit-content;
    &:hover {
        background-color: ${colors.third};
        color: ${colors.fourth};
        border: 1px solid ${colors.third};
        
    }
`
const ButtonLinkSecondary = styled(ButtonLink)`
    background-color: ${colors.first};
`
export function Button({children, type}: {children: any, type?: "secondary" | "primary"}) {
    return (
        <>
            {type ==="secondary"? 
                 <ButtonLinkSecondary>{children}</ButtonLinkSecondary>
            : 
                <ButtonLink>{children}</ButtonLink>
            }
        </>
    )
}
