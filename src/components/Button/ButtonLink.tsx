import colors from "../../color";
import styled from "styled-components"

import { Link } from "react-router-dom";
import buttonGlobal from "./buttonGlobal";

export const ButtonLinkPrimary = styled(Link)`
    ${buttonGlobal};
    border: 6px solid ${colors.fourth};
    background-color: ${colors.fourth};
    
    &:hover {
        border: 6px solid ${colors.fourth};
        background-color: transparent;
    }
`
const ButtonLinkSecondary = styled(Link)`
    ${buttonGlobal};
    border: 3px solid ${colors.first};
    background-color: ${colors.first};
    &:hover {
        border: 3px solid ${colors.third};
        background-color: ${colors.third};
        color: ${colors.fourth};
    }
`
const ButtonLinkOut = styled(Link)`
    ${buttonGlobal};
    border: 6px solid transparent;
    background-color: transparent;
    color: ${colors.white};
    &:hover {
        border: 6px solid white;
        background-color: white;
        color:${colors.fourth};
    }
`
export function ButtonLink({children, type, to}: {children: string, type?: "secondary" | "primary" | "outSite", to: string}) {
    // const buttonType = type ==="secondary"? 
    //     <ButtonLinkSecondary to={to}>{children}</ButtonLinkSecondary>
    // : 
    //     <ButtonLinkPrimary to={to}>{children}</ButtonLinkPrimary>

    let buttonType
    switch(type) {
        case "secondary":
            buttonType = <ButtonLinkSecondary to={to}>{children}</ButtonLinkSecondary>
        break
        case "outSite":
            buttonType = <ButtonLinkOut to={to}>{children}</ButtonLinkOut>
        break
        default:
            buttonType = <ButtonLinkPrimary to={to}>{children}</ButtonLinkPrimary>
        break
    }
    return (buttonType)
    
}