import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* RESET CSS
    http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, b, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    // GLOBAL CONFIG

    html, body{
        width: 100vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body{
        background: linear-gradient(40deg,#000000,#181329);
        font-family: var(--font-pro);
        overflow-x:hidden ;
    }

    // GLOBAL VARIABLES

    :root{
        --title-homepage: #ad9aff;
        --sub-title-homepage: #fffffff6;
        --transparent-container-black: rgb(0,0,0,0.2);
        --p-color: rgb(255,255,255,0.8);
        --h1-containter-content-color: rgb(255,255,255,0.8);
        --font-pro: 'Source Code Pro', monospace; ;

    }

    /* width */
::-webkit-scrollbar {
  width: 10px;

}

/* Track */
::-webkit-scrollbar-track {
  background: #000000ff;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4c475c;
  border-radius: 5px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6b6b6b;
}

`;

export default GlobalStyle;
