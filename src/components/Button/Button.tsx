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
    border: 3px solid ${colors.white};
    background-color: ${colors.white};
    color: ${colors.fourth};
    &:hover {
        border: 3px solid ${colors.white};
        background-color: transparent;
        color: ${colors.white};
    }
`
const ButtonTag = styled.button`
    ${buttonGlobal};
    background-color: ${colors.fourth};
    border: 3px solid ${colors.white};
    padding: 1rem;
    border-radius: 2rem;
    &:hover {
        color:${colors.fourth};
        background-color: ${colors.white};
        border-color: ${colors.white};
    }
`
const ButtonFilter = styled.button`
    ${buttonGlobal};
    color: ${colors.fourth};
    background-color: ${colors.white};
    border:  6px solid ${colors.fourth};
    padding: 1.5rem;
    border-radius: 4rem;
    &:hover{
        color: ${colors.white};
        background-color: ${colors.fourth};
        border: 6px solid ${colors.fourth};
    }
`
const ButtonSmall = styled.button`
    ${buttonGlobal};
    padding:  1rem;
    background-color: ${colors.fourth};
    border: 1px solid ${colors.fourth};
    box-shadow: none;
    color: ${colors.white};
    &:hover{
        color: ${colors.fourth};
        background-color: ${colors.third};
        border: 1px solid ${colors.third};
    }
`
export function Button({children, type, onClick }: { children: string, type?: "reset" | "primary"| "tag" | "filter"| "small", onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void }) {
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
            case "small":
                buttonType = <ButtonSmall onClick={ onClick }>{children}</ButtonSmall>
            break
            default:
                buttonType = <ButtonPrimary onClick={ onClick }>{children}</ButtonPrimary>
            break
        }
    return (buttonType)
}
