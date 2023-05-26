//REACT
import React, {useState, useEffect} from "react";

//STYLED COMPONENTS
import { BotaoMenuGrafico, BotaoSalvar, BotaoVoltar, DivBotoes, DivConteudo, DivGraficos, DivMenuGraficos, Fundo, Janela } from "../Styles/Graficos_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS


//ROUTES
import { useNavigate} from "react-router-dom";
import { goBack } from "../Routes/Coordinator";


//COMPONENTS
import GraficoLinguagem from "../Components/Grafico Linguagens/GraficoLinguagem";



function Graficos(){

    const navigate = useNavigate()

    const [grafico, setGrafico] = useState([{}])

    const renderGrafico = grafico.map((graf) => {

        if(graf.nome === 'linguagens'){
            return(
                <GraficoLinguagem key={Math.random()}></GraficoLinguagem>
            )
        }else {
            return(
                <p>Selecione um gráfico</p>
            )
        }
        
    });

    const mostraGrafico = (grafico) => {
        setGrafico([ {nome: grafico} ])
    }

    return(
        <>
            <GlobalStyle/>
            <Fundo>
                <Janela>
                    <p>Gráficos</p>
                    <DivConteudo>
                        <DivMenuGraficos>
                            <BotaoMenuGrafico onClick={()=>{mostraGrafico('linguagens')}}>Linguagens</BotaoMenuGrafico>
                        </DivMenuGraficos>
                        <DivGraficos>
                            {renderGrafico}
                        </DivGraficos>
                    </DivConteudo>
                    <DivBotoes>
                        <BotaoVoltar onClick={()=>{goBack(navigate)}}>VOLTAR</BotaoVoltar>
                        <BotaoSalvar>SALVAR</BotaoSalvar>
                    </DivBotoes>
                </Janela>
            </Fundo>
        </>
    )
}

export default Graficos;