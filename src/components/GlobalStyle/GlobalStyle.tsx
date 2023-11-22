import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    main {
        width: 100vw;
        min-height: 100vh;
        * {
        box-sizing: border-box
        }
        *:focus {
            border: 6px solid black;
        }
    }
    
`


export default globalStyle
