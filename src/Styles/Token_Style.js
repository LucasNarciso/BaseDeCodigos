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

//Logo que fica acima da janela
export const Logo = styled.img`
    width: 37px;
    margin-bottom: 50px;
`

//Janela principal
export const Janela = styled.div`
    background-color: #EDE6E3;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
    gap: 22px;
    color: #404040;
    width: clamp(324px, 80%, 580px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
`

//Personalização do título da janela
export const Titulo = styled.p`
    font-size: 20px;
    color: #404040;
`

//Separação dos inputs do form
export const SeparadorForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    gap: 4px;
    font-size: 16px;
`

//Personalização dos Inputs do Form
export const InputToken = styled.input`
    width: 100%;
    height: 40px;
    background-color: #DADAD9;
    outline: none;
    border: none;
    border-bottom: 1px solid #F06449;
    border-radius: 2.5px;
    padding: 0px 5px;
    font-size: 16px;
    color: #404040;
    text-align: center;
`

//Separação dos botões do form
export const SeparadorBotoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
`

//Botão de enviar as informações do form
export const BotaoEntrar = styled.button`
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

//Botão que envia para a página de registro
export const BotaoVoltar = styled.a`
    width: auto;
    height: auto;
    background-color: #FFFFFF;
    border: none;
    border-radius: 2.5px;
    color: #F06449;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #D4D4D4;
    }
`

export const TokenErro = styled.div`
    font-size: 15px;
    color: #F06449;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    width: auto;
    height: 10px;
`