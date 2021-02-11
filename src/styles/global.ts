import { createGlobalStyle, css } from 'styled-components';
import Github from '../assets/Github.svg';

interface DarkMode {
    darkMode: boolean;
}

export default createGlobalStyle<DarkMode>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5 url(${Github}) no-repeat 70% top;
        -webkit-font-smooth: antialiased;

        ${(props) => props.darkMode && css`
            background: #36365C  url(${Github}) no-repeat 70% top;
            -webkit-font-smooth: antialiased !important;
        `};
    }

    body, input {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;