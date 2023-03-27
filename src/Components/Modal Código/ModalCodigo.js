import React, {useState, useEffect} from "react";

import { BarraInferior, BotaoCalcelar, BotaoPequenoRedondo, BotaoSalvar, Codigo, DescDetalhada, DescResumida, DivContentDropUp, DivBotoes, DivColunaEsquerda, DivConteudo, DivDropUP, DivLimiteAjuda, Fundo, InputSubJanelas, Janela, SeletorLinguagem, Titulo, TituloSubJanelas, ContentDropUp, ItemDropUp } from "./ModalCodigo_Style"

function ModalCodigo(props){

    // let tipoModal;

    // if (props.tipo === "Editar") {
    //     tipoModal = 'Editar';
    // }else{
    //     tipoModal = 'Adicionar';
    // }

    const [limitCharResumo, setLimitCharResumo] = useState([ {key: Math.random(), tamanho:0, limite: 100} ]);
    const [limitCharDetalhada, setLimitCharDetalhada] = useState([ {key: Math.random(), tamanho:0, limite: 550} ]);
    const [limitCharCode, setLimitCharCode] = useState([ {key: Math.random(), tamanho:0, limite: 4000} ]);

    const [dropUp, setDropUp] =useState([]);

    const renderLimiteCharResumo = limitCharResumo.map((lim) => {
        return( <p key={Math.random()}>{lim.tamanho}/{lim.limite}</p> )
    });

    const renderLimiteCharDetalhada = limitCharDetalhada.map((lim) => {
        return( <p key={Math.random()}>{lim.tamanho}/{lim.limite}</p> )
    });

    const renderLimiteCharCode = limitCharCode.map((lim) => {
        return( <p key={Math.random()}>{lim.tamanho}/{lim.limite}</p> )
    });

    const renderDropUp = dropUp.map((drop) => {
        return( 
            <DivContentDropUp key={Math.random()}>
                <ContentDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                    <ItemDropUp onClick={()=>{setDropUp([])}}>Item</ItemDropUp>
                </ContentDropUp>
            </DivContentDropUp>
        )
    });

    function getTamanhoInput(name){
        return document.getElementsByName(name)[0].value.split("").length;
    }

    function showDropUpContent(){
        if (getTamanhoInput('Seletor') != 0) {
            setDropUp([ {key:Math.random()} ])
        }else{
            setDropUp([])
        }
    }

    return(
        <Fundo>
            <Janela>
                <Titulo>{props.titulo}</Titulo>

                <DivConteudo>
                    <DivColunaEsquerda>
                        <DescResumida>
                            <TituloSubJanelas>
                                <p>Descrição Resumida</p>
                                <DivLimiteAjuda>
                                    <p>{renderLimiteCharResumo}</p>
                                    <BotaoPequenoRedondo>?</BotaoPequenoRedondo>
                                </DivLimiteAjuda>
                            </TituloSubJanelas>
                            <InputSubJanelas onKeyUp={()=>{setLimitCharResumo([ {key: Math.random(), tamanho: getTamanhoInput("InputDescResumida"), limite: 100} ])}} name={"InputDescResumida"} maxLength={100}/>
                        </DescResumida>

                        <DescDetalhada>
                            <TituloSubJanelas>
                                <p>Descrição Detalhada</p>
                                <DivLimiteAjuda>
                                    <p>{renderLimiteCharDetalhada}</p>
                                    <BotaoPequenoRedondo>?</BotaoPequenoRedondo>
                                </DivLimiteAjuda>
                            </TituloSubJanelas >
                            <InputSubJanelas onKeyUp={()=>{setLimitCharDetalhada([ {key: Math.random(), tamanho: getTamanhoInput("InputDescDetalhada"), limite: 550} ])}} name={"InputDescDetalhada"} maxLength={550}/>
                        </DescDetalhada>
                    </DivColunaEsquerda>
                    
                    <Codigo>
                        <TituloSubJanelas>
                            <p>Código</p>
                            <DivLimiteAjuda>
                                <p>{renderLimiteCharCode}</p>
                                <BotaoPequenoRedondo>?</BotaoPequenoRedondo>
                            </DivLimiteAjuda>
                        </TituloSubJanelas>
                        <InputSubJanelas onKeyUp={()=>{setLimitCharCode([ {key: Math.random(), tamanho: getTamanhoInput("InputCode"), limite: 4000} ])}} name={"InputCode"} maxLength={4000}/>
                    </Codigo>
                </DivConteudo>

                <BarraInferior>
                    <DivDropUP>
                        <SeletorLinguagem name={"Seletor"} onKeyUp={()=>{showDropUpContent()}}/>
                        {renderDropUp}
                    </DivDropUP>
                    
                    <DivBotoes>
                        <BotaoCalcelar onClick={props.function}>CANCELAR</BotaoCalcelar>
                        <BotaoSalvar>SALVAR</BotaoSalvar>
                    </DivBotoes>
                </BarraInferior>
            </Janela>
        </Fundo>
    )
}

export default ModalCodigo;