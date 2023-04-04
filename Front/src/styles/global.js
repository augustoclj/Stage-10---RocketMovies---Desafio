import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 16px;
    outline: none;
    font-family: 'Roboto Slab', serif;
  }

  a{
    text-decoration: none;

  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }


  * {
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK_100} transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 20px;
  border: 2px solid transparent;
}


`;

