import React from "react";

import { DatasResultadoPesquisa, DescResultadoPesquisa, DivResultadoPesquisa } from "./CardResultado_Style";


function CardResultado (props) {
    return(
        <DivResultadoPesquisa onClick={props.func}>
            <DescResultadoPesquisa>
                <p>{props.desc}</p>
                <p>{props.linguagem}</p>
            </DescResultadoPesquisa>
            <DatasResultadoPesquisa>
                <p>{props.upload}</p>
                <p>{props.modificado}</p>
            </DatasResultadoPesquisa>
        </DivResultadoPesquisa>
    )
}

export default CardResultado;