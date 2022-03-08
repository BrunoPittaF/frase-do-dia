import { createGlobalStyle } from "styled-components";

/* 1rem = 16px */
export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #1A1A1A;

        --text-title: #FFFFFF;
        --text-body: #D9D9D9;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        //fontes mais nítidas, menos serrilhadas
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', 'Roboto', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;
