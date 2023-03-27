import styled from "styled-components";


export const DivDesc = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #646464;
    transition: 0.2s ease-in-out;  
`

export const DivDescExterna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 10px;
    gap: 10px;
    background-color: #EDE6E3;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
    transition: 0.2s ease-in-out;   

    :hover{
        cursor: pointer;
        background-color: #DBCDC7;
    }
`

export const DivDescTexto = styled.div`
    width: 100%;
    height: 100px;
    background-color: #FFFFFF;
    color: #646464;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    border-radius: 2.5px;
    padding: 5px;
    overflow: auto;
`