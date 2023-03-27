import styled from "styled-components"


//Elemento pai que alinha tudo ao centro
export const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
`

//Janela principal
export const Janela = styled.div`
    background-color: #EDE6E3;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
    gap: 22px;
    color: #404040;
    width: clamp(324px, 80%, 910px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
`

//Personalização do título da janela
export const Titulo = styled.p`
    font-size: 20px;
    color: #404040;
`

//Separação dos botões do form
export const SeparadorBotoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`

//Botão de enviar as informações do form
export const BotaoPaginaPrincipal = styled.button`
    width: auto;
    height: auto;
    background-color: #F06449;
    border: none;
    border-radius: 2.5px;
    color: #fff;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

//Texto geral do erro
export const TextoGeral = styled.p`
    font-size: 20px;
    width: auto;
    height: auto;
    text-align: center;
    color: #404040;
`

//Tela contendo todo o conteudo do erro
export const ConteudoErro = styled.div`
    width: 100%;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #404040;
    padding: 35px 0px;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
`

//Personalização Emoji
export const Emoji = styled.p`
    color: #F06449;
    font-size: 25px;
`