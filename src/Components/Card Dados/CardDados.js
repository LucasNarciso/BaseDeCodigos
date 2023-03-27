import React from "react";

import { BarraInternaProgressoDados, BarraProgressoDados, CardDado, CardDadoclicavel, ConteudoDados, Dado, TituloDados } from "./CardDados_Style";


function CardDados(props){

    if(props.function != null){
        return(
            <CardDadoclicavel onClick={props.function}>
                <ConteudoDados>
                    <TituloDados>{props.titulo}</TituloDados>
                    <Dado>{props.dado}</Dado>
                </ConteudoDados>
                <BarraProgressoDados>
                    <BarraInternaProgressoDados style={{ width: props.porcentagem}}/>
                </BarraProgressoDados>
            </CardDadoclicavel>
        )
    }else{
        return(
            <CardDado>
                <ConteudoDados>
                    <TituloDados>{props.titulo}</TituloDados>
                    <Dado>{props.dado}</Dado>
                </ConteudoDados>
                <BarraProgressoDados>
                    <BarraInternaProgressoDados style={{ width: props.porcentagem}}/>
                </BarraProgressoDados>
            </CardDado>
        )
    }
    
}

export default CardDados;