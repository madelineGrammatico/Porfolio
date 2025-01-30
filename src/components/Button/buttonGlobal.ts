import colors from "../../color"

const buttonBasic = `
    color: ${colors.white};
    padding: 1.5rem;
    line-height: 0;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    &:hover {
        background-color: ${colors.third};
        color: ${colors.fourth};
        border: 3px solid ${colors.fourth};
        
    }
`
export default buttonBasic