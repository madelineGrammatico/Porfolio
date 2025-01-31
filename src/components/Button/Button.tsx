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
    border: 3px solid ${colors.fourth};
    background-color: ${colors.fourth};
    color: ${colors.white};
    &:hover {
        border: 3px solid ${colors.fourth};
        background-color: transparent;
        color: ${colors.fourth};
    }
`
const ButtonTag = styled.button`
    ${buttonGlobal};
    background-color: ${colors.white};
    border: 3px solid ${colors.fourth};
    color: ${colors.fourth};
    padding: 1rem;
    border-radius: 2rem;
    &:hover {
        color:${colors.white};
        background-color: ${colors.fourth};
        border-color: ${colors.fourth};
    }
`
const ButtonFilter = styled.button`
    ${buttonGlobal};
    color: ${colors.white};
    background-color: ${colors.fourth};
    border:  6px solid ${colors.fourth};
    padding: 2rem;
    border-radius: 4rem;
    &:hover{
        color: ${colors.fourth};
        background-color: ${colors.white};
        border: 6px solid ${colors.fourth};
    }
    &:focus{
        color: ${colors.white};
        background-color: ${colors.fourth};
        border:  6px solid ${colors.fourth};
    }
`
const ButtonSmall = styled.button`
    ${buttonGlobal};
    padding:  0.8rem;
    font-size: 0.8rem;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    box-shadow: none;
    color: ${colors.fourth};
    
    &:hover{
        color: ${colors.fourth};
        background-color: ${colors.third};
        border: 1px solid ${colors.third};
    }
    @media screen and (min-width: 500px){
        padding:  1rem;
        font-size: 1rem;
        position: inherit;
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
