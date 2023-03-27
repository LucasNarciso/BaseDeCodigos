import React from "react";

import { ColunaGrafico, ConteudoColunaGrafico, CorLegenda, DivBarraLinguagem, DivColunaLinguagem, DivConteudo, DivConteudoLinguagem, DivGráficoLinguagem, DivLegendaLinguagem, LegendaLinguagem, TituloColunaLinguagem } from "./GraficoLinguagem_style";



function GraficoLinguagem(){
    return(
        <DivConteudo>
            <DivColunaLinguagem>
                <DivConteudoLinguagem>
                    <TituloColunaLinguagem>
                        Top 5
                    </TituloColunaLinguagem>
                    <DivGráficoLinguagem>
                        <ColunaGrafico> 8 <ConteudoColunaGrafico style={{height: '151px'}}/> </ColunaGrafico>
                        <ColunaGrafico> 8 <ConteudoColunaGrafico style={{height: '210px'}}/> </ColunaGrafico>
                        <ColunaGrafico> 8 <ConteudoColunaGrafico style={{height: '84px'}}/> </ColunaGrafico>
                        <ColunaGrafico> 8 <ConteudoColunaGrafico style={{height: '178px'}}/> </ColunaGrafico>
                        <ColunaGrafico> 8 <ConteudoColunaGrafico style={{height: '35px'}}/> </ColunaGrafico>
                    </DivGráficoLinguagem>
                </DivConteudoLinguagem>
                <DivBarraLinguagem/>
            </DivColunaLinguagem>
            <DivColunaLinguagem>
                <DivConteudoLinguagem>
                    <TituloColunaLinguagem>
                        Legenda
                    </TituloColunaLinguagem>
                    <DivLegendaLinguagem>
                        <LegendaLinguagem> <CorLegenda style={{backgroundColor: "#3FA467"}}/> JS </LegendaLinguagem>
                        <LegendaLinguagem> <CorLegenda style={{backgroundColor: "#3FA467"}}/> JS </LegendaLinguagem>
                        <LegendaLinguagem> <CorLegenda style={{backgroundColor: "#3FA467"}}/> JS </LegendaLinguagem>
                        <LegendaLinguagem> <CorLegenda style={{backgroundColor: "#3FA467"}}/> JS </LegendaLinguagem>
                        <LegendaLinguagem> <CorLegenda style={{backgroundColor: "#3FA467"}}/> JS </LegendaLinguagem>
                    </DivLegendaLinguagem>
                </DivConteudoLinguagem>
                <DivBarraLinguagem/>
            </DivColunaLinguagem>
        </DivConteudo>
    )
}

export default GraficoLinguagem;