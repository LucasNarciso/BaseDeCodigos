import styled from "styled-components";

export const Fundo = styled.div`
    position: fixed;
    background-color: rgba(43, 43, 43, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0px;

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const Janela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    position: absolute;
    width: 80vw;
    height: 80vh;
    background: #FFFFFF;
    border-radius: 5px;

    @media screen and (max-width: 400px){
        width: 90vw;
        height: 80vh;
    }
`

export const Titulo = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #404040;
    width: 100%;
    text-align: center;
`

export const DescResumida = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 5px;
    width: 100%;
    height: 110px;
    background: #EDE6E3;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
`

export const DescDetalhada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 5px;
    width: 100%;
    height: 100%;
    background: #EDE6E3;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
`

export const Codigo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 5px;
    width: 100%;
    height: 100%;
    background: #EDE6E3;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
`

export const BarraInferior = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: auto;
`

export const SeletorLinguagem = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 5px;
    width: 265px;
    height: 42px;
    z-index: 1;
    outline: none;
    background: #FFFFFF;
    border: 1px solid #F06449;
    border-radius: 5px;

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const DivBotoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: auto;
    height: 100%;

    @media screen and (max-width: 400px){
        width: 100%;
    }
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

export const BotaoCalcelar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: auto;
    height: 42px;
    background: #DADAD9;
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

export const TituloSubJanelas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #404040;
    width: 100%;
`

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

export const InputSubJanelas = styled.textarea`
    display: flex;
    align-items: flex-start;
    justify-content: left;
    padding: 10px;
    width: 100%;
    height: 100%;
    background: #DADAD9;
    border-radius: 2.5px;
    border: none;
    outline: none;
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #404040;
    resize: none;
`

export const DivLimiteAjuda = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    align-items: center;
    gap: 15px;
`

export const DivConteudo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 400px){
        overflow: auto;
        flex-wrap: wrap;
    }
`

export const DivColunaEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: 100%;
`

export const DivDropUP = styled.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const DivContentDropUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 265px;
    height: auto;
    max-height: 300px;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #F06449;
    border-radius: 5px;
    bottom: 0px;
    padding: 5px 5px 47px 5px;
    z-index: 0;
    overflow: auto;

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const ContentDropUp = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    height: 100%;
    overflow: auto;
    gap: 5px;
`

export const ItemDropUp = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #DADAD9;
    border-radius: 2.5px;
    width: 100%;
    padding: 5px 5px;

    :hover{
        cursor: pointer;
        background-color: #EDE6E3;
    }
`