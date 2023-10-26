import styled from "styled-components"
import colors from "../../color"

import buttonGlobal from "./buttonGlobal";
import React from "react";

const ButtonPrimary = styled.button`
    ${buttonGlobal};
    border: 3px solid ${colors.fourth};
    background-color: ${colors.fourth};
`
const ButtonResetFilter = styled.button`
    ${buttonGlobal};
    border: 3px solid transparent;
    background-color: transparent;
    &:hover {
        border: 3px solid white;
        background-color: white;
    }
`
const FilterStyled = styled.button`
    ${buttonGlobal};
    background-color: ${colors.fourth};
    border: 3px solid ${colors.fourth};
    padding: 1rem;
    border-radius: 2rem;
    &:hover {
        color:${colors.fourth};
        background-color: white;
        border-color: ${colors.fourth};
    }
`
export function Button({children, type, onClick }: { children: string, type?: "reset" | "primary"| "filter", onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void }) {
    let buttonType
        switch(type) {
            case "reset":
                buttonType = <ButtonResetFilter onClick={ onClick }>{children}</ButtonResetFilter>
            break
            case "filter":
                buttonType = <FilterStyled onClick={ onClick }>{children}</FilterStyled>
            break
            default:
                buttonType = <ButtonPrimary onClick={ onClick }>{children}</ButtonPrimary>
            break
        }
    return (buttonType)
}
