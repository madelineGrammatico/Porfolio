import colors from "../../color";
import styled from "styled-components"

import { Link } from "react-router-dom";
import buttonGlobal from "./buttonGlobal";

export const ButtonLinkPrimary = styled(Link)`
    ${buttonGlobal};
    border: 3px solid ${colors.fourth};
    background-color: ${colors.fourth};
    &:hover {
        border: 3px solid ${colors.third};
        background-color: ${colors.first};
    }
`
const ButtonLinkSecondary = styled(Link)`
    ${buttonGlobal};
    border: 3px solid ${colors.first};
    background-color: ${colors.first};
    &:hover {
        border: 3px solid ${colors.third};
        background-color: ${colors.fourth};
    }
`
export function ButtonLink({children, type, to}: {children: string, type?: "secondary" | "primary", to: string}) {
    const buttonType = type ==="secondary"? 
        <ButtonLinkSecondary to={to}>{children}</ButtonLinkSecondary>
    : 
        <ButtonLinkPrimary to={to}>{children}</ButtonLinkPrimary>
    return (buttonType)
    
}