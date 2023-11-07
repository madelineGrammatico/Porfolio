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
    border: 3px solid white;
    background-color: white;
    color: ${colors.fourth};
    &:hover {
        border: 3px solid white;
        background-color: transparent;
    }
`
const ButtonTag = styled.button`
    ${buttonGlobal};
    background-color: ${colors.fourth};
    border: 3px solid white;
    padding: 1rem;
    border-radius: 2rem;
    &:hover {
        color:${colors.fourth};
        background-color: white;
        border-color: white;
    }
`
const ButtonFilter = styled.button`
    ${buttonGlobal};
    color: ${colors.fourth};
    background-color: white;
    border:  6px solid ${colors.fourth};
    padding: 1.5rem;
    border-radius: 4rem;
    &:hover{
        color: white;
        background-color: ${colors.fourth};
        border: 6px solid ${colors.fourth};
    }
`
export function Button({children, type, onClick }: { children: string, type?: "reset" | "primary"| "tag" | "filter", onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void }) {
    let buttonType
        switch(type) {
            case "reset":
                buttonType = <ButtonResetFilter onClick={ onClick }>{children}</ButtonResetFilter>
            break
            case "tag":
                buttonType = <ButtonTag onClick={ onClick }>{children}</ButtonTag>
            break
            case "filter":
                buttonType = <ButtonFilter onClick={ onClick }>{children}</ButtonFilter>
            break
            default:
                buttonType = <ButtonPrimary onClick={ onClick }>{children}</ButtonPrimary>
            break
        }
    return (buttonType)
}
