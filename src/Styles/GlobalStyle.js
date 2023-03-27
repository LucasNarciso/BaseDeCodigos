import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: #ffffff;
    }

    //Personaliza a Calha da Barra de rolagem
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border-radius: 10px;
    }

    //Personaliza a Barra de Rolagem
    ::-webkit-scrollbar-thumb {
        background: #F06449;
        width: 0.30em;
        height: 5px;
        border-radius: 10px;
    }
`