import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body {
       background: #FFFAF0;
       font-family: "Times New Roman", Times, serif;
   }
`

export default GlobalStyle