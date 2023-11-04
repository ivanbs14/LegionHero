import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }
    
    body {
        background-image: linear-gradient(to bottom, #000000, #1C1C1C);
        background-attachment: fixed;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: ${({ theme }) => theme.COLORS.WHITE100};
        
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    a {
        color: ${({ theme }) => theme.COLORS.WHITE100};
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        color: ${({ theme }) => theme.COLORS.GREEN700};
        filter: brightness(0.9);
    };

    @media screen and (min-width: 431px) and (max-width: 1023px) {
        body {
           
        }
    };

    @media screen and (max-width: 430px) {
        body {
            
        }
    };
`;