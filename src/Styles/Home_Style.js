import styled from "styled-components"

//Elemento pai que alinha tudo ao centro
export const Fundo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap: 50px;
    padding: 50px;

    @media screen and (max-width: 400px) {
        padding: 25px;
        gap: 25px;
        flex-wrap: wrap;
        height: 100%;
    }
`
//Janela principal
export const JanelaPrincipal = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    gap: 29px;
    color: #404040;
    width: clamp(330px, 100%, 645px);
    height: clamp(330px, 100%, 560px);
    transition: 0.2s ease-in-out;
`

//Janela da descrição do código
export const JanelaDescCodigo = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    border-bottom: 2px solid #F06449;
    border-radius: 5px;
    gap: 10px;
    color: #404040;
    width: clamp(330px, 100%, 645px);
    height: clamp(330px, 100%, 560px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    transition: 0.2s ease-in-out;
`

export const BarraControle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #F06449;
    transition: 0.2s ease-in-out;
`

export const DivLogoTitulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    transition: 0.2s ease-in-out;
    height: 50px;
`

export const Titulo = styled.p`
    color: #404040;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    width: auto;
    height: auto;
    transition: 0.2s ease-in-out;
`

export const Logo = styled.img`
    width: 29px;
    transition: 0.2s ease-in-out;
`

export const DivBotoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    transition: 0.2s ease-in-out;
`

export const BotaoBarraControle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2.5px;
    width: 30px;
    height: 30px;
    transition: 0.2s ease-in-out;

    :hover{
        background-color: #DADAD9;
    }
`

export const DivBarraPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
`

export const BotaoFiltro = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 40px;
    height: 40px;
    background-color: #F06449;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const BarraPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: 0.2s ease-in-out;
`

export const InputPesquisa = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 100%;
    background-color: #EDE6E3;
    border: none;
    border-bottom: 2px solid #F06449;
    border-radius: 5px 0px 0px 5px;
    outline: none;
    font-size: 16px;
    color: #404040;
    transition: 0.2s ease-in-out;
`

export const BotaoPesquisa = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 74px;
    height: 100%;
    background-color: #F06449;
    border-radius: 0px 5px 5px 0px;
    border: none;
    outline: none;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #C4371C;
    }
`

export const DivExternaResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    gap: 10px;
    width: 100%;
    height: clamp(330px, 100%, 560px);
    background-color: #FFFFFF;
    border-width: 2px 0px;
    border-style: solid;
    border-color: #F06449;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    overflow: auto;
`

export const DivInternaResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 400px){
        max-height: 300px;
    }
`

export const BarraPage = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    gap: 25px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    background-color: #EDE6E3;
    border-top: 2px solid #F06449;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #404040;
    
    @media screen and (max-width: 400px){
        max-height: 300px;
    }
`

export const BotaoBarraPage = styled.button`
    background-color: #F06449;;
    width: 30px;
    height: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.5px;
    transition: 0.2s ease-in-out;

    svg, path{
        stroke: #FFFFFF;
    }

    :hover{
        cursor: pointer;
        background-color: #C4371C;        
    }
`