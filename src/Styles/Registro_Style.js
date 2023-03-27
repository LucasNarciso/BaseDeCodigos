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
    width: clamp(324px, 80%, 364px);
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
export const InputRegistro = styled.input`
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
export const LinkRegistro = styled.button`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #F06449;
    transition: 0.2s ease-in-out;
    background-color: transparent;
    border: none;

    :hover{
        color: #C4371C;
        cursor: pointer;
    }
`

//Tempo de validade do token
export const Tempo = styled.p`
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #F06449;
`

//personalização do nome que fica encima do input pra receber o botão de ajuda
export const NomeInputRegistro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`

//Botão pequeno redondo utilizado na ação de ajuda e de fechar mensagem
export const BotaoPequenoRedondo = styled.div`
    background-color: #F06449;
    height: 15px;
    width: 15px;
    border-radius: 1000px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;

    :hover{
        cursor: pointer;
    }
`

//Div que comporta as mensagens de ajuda na tela
export const DivAjudaMensagem = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;
`

//Div que contem o texto da mensagem de ajuda
export const DivTextoAjuda = styled.div`
    background-color: #ffffff;
    border: 1px solid #F06449;
    width: 300px;
    height: auto;
    padding: 15px;
    transition: 0.2s ease-in-out;
    border-radius: 5px;
    opacity: 0;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

//Personalização do título pra receber o botão de fechar a mensagem
export const TituloTextoDivAjuda = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`

export const RegErro = styled.div`
    font-size: 15px;
    color: #F06449;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    width: auto;
    height: 10px;
`