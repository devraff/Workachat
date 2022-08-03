import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  --background-medium-gray: #424956; /* Background Cinza médio */
  --background-darker-gray: #2E3747; /* Background Cinza-escuro */
  --background-bot: #E0EBFC; /* Background das mensagens do bot */

  --text-blue: #87A0D0; /* Texto azul */
  --text-black: #2E3747; /* Texto preto */
  
}


@media (max-width: 1260px) {
  html {
    font-size: 93.75%;
  }
}


@media (max-width: 990px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
button {
  font: 400 1rem sans-serif;
  outline: none;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`