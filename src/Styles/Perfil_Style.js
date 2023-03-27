import styled from "styled-components"

//Elemento pai que alinha tudo ao centro
export const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    gap: 10px;

    @media screen and (max-width: 400px){
        height: 100%;
        padding: 30px;
    }
`

//Janela principal
export const Janela = styled.div`
    background-color: #EDE6E3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 5px;
    gap: 22px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #404040;
    width: clamp(324px, 80%, 916px);
    height: auto;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 400px){
        padding: 15px;
        gap: 15px;
    }
`

export const DivConteudo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    gap: 30px;
    width: 100%;
    height: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 400px){
        gap: 15px;
    }
`

export const DivColuna = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 15px;
    width: 100%;
    height: 380px;
    max-width: 410px;
    background-color: #FFFFFF;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #404040;
`

export const DivBotoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: auto;
`

export const BotaoSalvar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: auto;
    height: 42px;
    background-color: #F06449;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const BotaoVoltar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: auto;
    height: 42px;
    background-color: #FFFFFF;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #404040;
    transition: 0.2s ease-in-out;

    :hover{
        background-color: #EDE6E3;
        cursor: pointer;
    }
    
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

export const DivTituloInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #404040;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: #DADAD9;
    border: none;
    outline: none;
    border-radius: 2.5px 0px 0px 2.5px;
    font-size: 14px;
    color: #404040;
    padding-left: 5px;
`

export const BotaoEditarInput = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 30px;
    height: 30px;
    background: #F06449;
    border-radius: 0px 2.5px 2.5px 0px;
    border: none;
    outline: none;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const DivTema = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #404040;
`

export const ConteudoTema = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: auto;
    background: #DADAD9;
    border-radius: 2.5px;
`

export const Tema = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    gap: 5px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 2.5px;

    :hover{
        cursor: pointer;
    }

    :hover > div > div{
        background-color: #646464;
    }
`

export const TemaSeparador = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #404040;

`

export const CheckTema = styled.div`
    width: 13px;
    height: 13px;
    background: #CCCCCC;
    border-radius: 1px;
    border: 2px solid #CCCCCC;
`

export const TemaPaleta = styled.div`
    width: 100%;
    height: 42px;
    border-radius: 1px;
`

export const DivLinguagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: #DADAD9;
    border-radius: 2.5px;
`

export const ConteudoLinguagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 2.5px;
`

export const DivInputLinguagens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    height: auto;
    border-radius: 2.5px;
`

export const InputLinguagens = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 2.5px 0px 0px 2.5px;
    padding-left: 5px;
`

export const BotaoLinguagens = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #F06449;
    outline: none;
    border: none;
    border-radius: 0px 2.5px 2.5px 0px;
    
    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const Linguagem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    width: 100%;
    height: 26px;
    background: #DADAD9;
    border-radius: 2.5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #646464;
`

export const BotaoApagarLinguagem = styled.button`
    width: 18px;
    height: 18px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    svg:hover > path{
        fill: #404040;
        cursor: pointer;
    }
`