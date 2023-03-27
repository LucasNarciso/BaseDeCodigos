//REACT
import React, {useState, useEffect} from "react";

//STYLED COMPONENTS
import { BotaoGraficos, BotaoVoltar, DivBotoes, DivConteudoCards, DivConteudoGrafico, Fundo, Janela } from "../Styles/Painel_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS


//ROUTES
import { useNavigate} from "react-router-dom";
import { goBack, goToGraficosPage } from "../Routes/Coordinator";

//COMPONENTS
import CardDados from "../Components/Card Dados/CardDados"


function Painel(){
    const navigate = useNavigate()

    const [content, setContent] = useState([
        { tipo: "card", titulo: "Armazenamento", dado: "10/500", porcentagem: "2%"},
        { tipo: "card", titulo: "Pesquisa", dado: "35", porcentagem: "0%"},
        { tipo: "card", titulo: "Linguagens", dado: "15", porcentagem: "0%"},
        { tipo: "card", titulo: "Acessos", dado: "16", porcentagem: "0%"},
        { tipo: "card", titulo: "Cópias", dado: "25", porcentagem: "0%"}
    ])

    const renderConteudo = content.map((content) => {

        return(
            <CardDados key={Math.random()} function={content.function} titulo={content.titulo} dado={content.dado} porcentagem={content.porcentagem}/>
        )
    });

    return(
        <>
            <GlobalStyle/>
            <Fundo>
                <Janela>
                    <p>Painel</p>
                    <DivConteudoCards>
                        {renderConteudo}
                    </DivConteudoCards>
                    <DivBotoes>
                        <BotaoVoltar onClick={()=>{goBack(navigate)}}>VOLTAR</BotaoVoltar>
                        <BotaoGraficos onClick={()=>{goToGraficosPage(navigate)}}>GRAFICOS</BotaoGraficos>
                    </DivBotoes>
                </Janela>
            </Fundo>
        </>
    )
}

export default Painel;