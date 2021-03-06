import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans Condensed';
    padding: 10px 30px;

    @media screen and (min-width: 800px) {
        padding: 20px 60px;
    }
}

a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
}
`;
