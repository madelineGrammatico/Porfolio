import styled from "styled-components"
import colors from "../../color"

import buttonGlobal from "./buttonGlobal";

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
export function Button({children, type, onClick }: { children: string, type?: "reset" | "primary", onClick?: () => void }) {
    const buttonType = type ==="reset"? 
        <ButtonResetFilter onClick={ onClick }>{children}</ButtonResetFilter>
    : 
        <ButtonPrimary onClick={ onClick }>{children}</ButtonPrimary>

    return (buttonType)
}
