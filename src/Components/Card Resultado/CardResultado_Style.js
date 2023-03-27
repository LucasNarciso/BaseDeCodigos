import styled from "styled-components"

export const DivResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 5px;
    width: 100%;
    height: auto;
    background-color: #F06449;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const DescResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 34px;
    background-color: #DADAD9;
    border-radius: 2.5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #404040;
    transition: 0.2s ease-in-out;
`

export const DatasResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    width: 100%;
    height: 21px;
    background-color: #DADAD9;
    border-radius: 2.5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #404040;
    transition: 0.2s ease-in-out;
`