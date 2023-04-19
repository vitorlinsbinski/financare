import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #131313;
    }

    .container {
        width: 100%;
        max-width: calc(1290px + 3.2rem);
        padding: 0 1.6rem;
        margin: 0 auto;
    }
`;

export default GlobalStyles;
