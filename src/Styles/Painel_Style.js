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

    @media screen and (max-width: 400px) {
        padding: 30px;
        gap: 25px;
        flex-wrap: wrap;
        height: 100%;
    }
`

//Janela principal
export const Janela = styled.div`
    background-color: #EDE6E3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 30px;
    border-radius: 5px;
    gap: 22px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #404040;
    width: clamp(324px, 80%, 756px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 400px){
        height: auto;
        padding: 15px;
    }
`

export const DivConteudoCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 22px;
    width: 100%;
    height: auto;
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

export const BotaoGraficos = styled.button`
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
