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
        padding: 25px;
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
    flex-direction: column;
    padding: 30px;
    border-radius: 5px;
    gap: 22px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #404040;
    width: clamp(200px, 100%, 1104px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 400px){
        height: auto;
        padding: 15px;
    }
`

export const DivConteudo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 22px;
    width: 100%;
    height: auto;

    @media screen and (max-width: 400px){
        flex-wrap: wrap;
        justify-content: center;
    }
    
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

export const DivMenuGraficos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 10px;
    width: 190px;
    height: 431px;
    background: #FFFFFF;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;

    @media screen and (max-width: 400px){
        width: 100%;
        height: auto;
    }
`

export const BotaoMenuGrafico = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 43px;
    background: #F06449;
    border-radius: 2.5px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const DivGraficos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    gap: 15px;
    width: 100%;
    height: 431px;
    background: #DADAD9;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;

    @media screen and (max-width: 400px){
        width: 100%;
        min-height: 400px;
        height: auto;
        padding: 15px;
    }
`