import React from "react";

import { DivExternaCodigo, TituloCodigo, BarraCodigo, DivLinguagemBotao, DivLinguagem, BotaoCodigo, DivInternaCodigo } from "./Codigo_Style";

function Codigo (props) {
    return(
        <DivExternaCodigo>
            <BarraCodigo>
                <TituloCodigo>Código</TituloCodigo>
                <DivLinguagemBotao>
                    <DivLinguagem> JS </DivLinguagem>
                    <BotaoCodigo onClick={()=> {props.func('editar')}}> EDITAR </BotaoCodigo>
                    <BotaoCodigo> COPIAR </BotaoCodigo>
                </DivLinguagemBotao>
            </BarraCodigo>
            <DivInternaCodigo>
                asjdkajshdklas
            </DivInternaCodigo>
        </DivExternaCodigo>
    )
}

export default Codigo;