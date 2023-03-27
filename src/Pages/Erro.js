//REACT
import React, {useState, useEffect} from "react";

//STYLED COMPONENTES
import { BotaoPaginaPrincipal, ConteudoErro, Emoji, Fundo, Janela, SeparadorBotoes, TextoGeral, Titulo } from "../Styles/Erro_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS

//ROUTES
import { useNavigate} from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinator";

function Token(){
    const navigate = useNavigate()

    return(
        <>
            <GlobalStyle/>
            <Fundo>

                <Janela>
                    
                    <Titulo>ERRO</Titulo>

                    <ConteudoErro>
                        <TextoGeral>Ops! Tem algo de errado com essa URL!</TextoGeral>
                        <Emoji>º-º</Emoji>
                        <TextoGeral>Tente digitá-la novamente ou prossiga para a Página Principal.</TextoGeral>
                    </ConteudoErro>

                    <SeparadorBotoes>
                        <BotaoPaginaPrincipal onClick={() => {goToHomePage(navigate)}}>PAGINA PRINCIPAL</BotaoPaginaPrincipal>
                    </SeparadorBotoes>

                </Janela>

            </Fundo>
        </>
    )
}


export default Token;