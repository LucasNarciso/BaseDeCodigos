import React from "react";

import { DivExternaCodigo, TituloCodigo, BarraCodigo, DivLinguagemBotao, DivLinguagem, BotaoCodigo, DivInternaCodigo } from "./Codigo_Style";

function Codigo (props) {
    return(
        <DivExternaCodigo>
            <BarraCodigo>
                <TituloCodigo>Código</TituloCodigo>
                <DivLinguagemBotao>
                    <DivLinguagem> {props.linguagem} </DivLinguagem>
                    <BotaoCodigo onClick={()=> {props.func('editar')}}> EDITAR </BotaoCodigo>
                    <BotaoCodigo> COPIAR </BotaoCodigo>
                </DivLinguagemBotao>
            </BarraCodigo>
            <DivInternaCodigo>
                {(props.code !== undefined) ? props.code : <p> {"</>"}</p>}
            </DivInternaCodigo>
        </DivExternaCodigo>
    )
}

export default Codigo;