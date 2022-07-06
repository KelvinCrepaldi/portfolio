import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        margin:0;
        padding:0;
        background: #DAFEFE;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    ul, ol{
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
