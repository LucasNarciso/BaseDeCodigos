import styled from "styled-components";

//Div que envolve todo o conteúdo da janela Código
export const DivExternaCodigo = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F06449;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
`

//Barra da janela Código
export const BarraCodigo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: auto;
    transition: 0.2s ease-in-out;
`

//Titulo da janela Codigo
export const TituloCodigo = styled.p`
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    width: auto;
    transition: 0.2s ease-in-out;
`

//Div que oraniga os elementos de linguagem e botão
export const DivLinguagemBotao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 5px;
    width: auto;
    height: 22px;
    transition: 0.2s ease-in-out;
`

//Div que contem a linguagem do código selecioando
export const DivLinguagem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    background-color: transparent;
    border-radius: 5px;
    width: auto;
    height: 100%;
    padding: 0px 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    transition: 0.2s ease-in-out;
`

//modelo de botão da janela Código
export const BotaoCodigo = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px;
    background-color: #FFFFFF;
    border-radius: 5px;
    width: auto;
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #F06449;
    border: none;
    transition: 0.2s ease-in-out;
    border: 1px solid transparent;

    :hover{
        cursor: pointer;
        background-color: #F06449;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-style: outset;
    }
`

//Div que contém o código selecionado
export const DivInternaCodigo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px;
    gap: 10px;
    width: 100%;
    height: 100%;
    background-color: #DADAD9;
    border-radius: 2.5px;
    transition: 0.2s ease-in-out;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #646464;

    @media screen and (max-width: 400px){
        min-height: 300px;
    }
`