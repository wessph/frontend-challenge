import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
`

export default GlobalStyle