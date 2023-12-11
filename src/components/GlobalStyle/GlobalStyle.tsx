import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    main {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction:column;
        * {
        box-sizing: border-box
        }
        *:focus-visible {
            border: 6px solid black;
        }
    }
    
`


export default globalStyle
