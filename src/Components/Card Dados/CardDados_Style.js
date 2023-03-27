import styled from "styled-components"


export const CardDado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 180px;
    height: 180px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

export const CardDadoclicavel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 180px;
    height: 180px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;

    :hover{
        cursor: pointer;
    }
`

export const ConteudoDados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 5px;
    width: 100%;
    height: 100%;
`

export const BarraProgressoDados = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px;
    gap: 10px;
    width: 100%;
    height: 23px;
    background-color: #DADAD9;
    border-radius: 2.5px;
`

export const BarraInternaProgressoDados = styled.div`
    background-color: #F06449;
    border-radius: 2.5px;
    height: 100%;
`

export const TituloDados = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: 33px;
    border-bottom: 1px solid #F06449;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #404040;
`

export const Dado = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #646464;
`