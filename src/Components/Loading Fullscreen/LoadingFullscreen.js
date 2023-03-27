//REACT
import React from "react";

//STYLED COMPONENTES
import { GlobalStyle } from "../../Styles/GlobalStyle";
import { Fundo, Gif } from "./LoadingFullscreen_style";

//ASSETS
import LoadingGifLaranja from "../../Assets/Loading-v3-Laranja.gif";
import LoadingGifBranco from "../../Assets/Loading-v3-Branco.gif";
import LoadingGifPreto from "../../Assets/Loading-v3-Preto.gif";

function LoadingFullscreen(){
    return(
        <>
            <GlobalStyle/>
            <Fundo>
                <Gif height={"40px"} src={LoadingGifLaranja}/>
            </Fundo>
        </>
    )
}

export default LoadingFullscreen;