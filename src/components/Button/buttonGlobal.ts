import colors from "../../color"

const buttonBasic = `
    color: white;
    padding: 1.2rem;
    border-radius: 8px;
    box-sizing: border-box;
    width: fit-content;
    &:hover {
        background-color: ${colors.third};
        color: ${colors.fourth};
        border: 3px solid ${colors.fourth};
        
    }
`
export default buttonBasic