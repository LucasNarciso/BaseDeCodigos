import styled from "styled-components"

export const DivConteudo = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;

    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`

export const DivColunaLinguagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
`

export const DivConteudoLinguagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 5px;
    width: 100%;
    height: auto;
`

export const TituloColunaLinguagem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #F06449;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #404040;
`

export const DivLegendaLinguagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: 309px;

    @media screen and (max-width: 400px){
        height: auto;
    }
`

export const DivBarraLinguagem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px;
    gap: 10px;
    width: 100%;
    height: 23px;
    background: #F06449;
    border-radius: 2.5px;

`

export const DivGráficoLinguagem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;
    gap: 20px;
    width: 100%;
    height: 309px;

    @media screen and (max-width: 400px){
        gap: 10px;
    }
`

export const ColunaGrafico = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: auto;
`

export const ConteudoColunaGrafico = styled.div`
    width: 100%;
    background: #3FA467;
`

export const LegendaLinguagem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 9px;
    width: 100%;
    height: 24px;

`

export const CorLegenda = styled.div`
    width: 20px;
    height: 20px;
`