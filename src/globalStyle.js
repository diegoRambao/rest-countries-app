import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 16px;
        background: ${(props) => (props.theme ? 'hsl(207, 26%, 17%)' : '#fff')}
    }
    .container {
        max-width: 1440px;
        width: 90%;
        margin: 0 auto;
    }
`
