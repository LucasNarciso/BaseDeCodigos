import React, {useState, useEffect} from "react";

import { DivDesc, DivDescExterna, DivDescTexto } from "./DescCodigo_Style";

function DescCodigo (props) {
    
    //Array utilizado para armazenar a Descrição
    const [desc, setDesc] = useState([]);

    //Renderiza a descrição
    const renderDesc = desc.map((desc) => {

        return(
            <DivDescTexto key={Math.random()} id={"DivDescTexto"}>
                {(desc.desc !== undefined) ? desc.desc : <p>Selecione um código</p>}
            </DivDescTexto>
        )
    });

    function showDesc() {

        if (document.getElementById('DivDescTexto')) {
            setDesc([]);
        }else{
            setDesc([{key: Math.random(), desc: props.descDetalhada }]);
        }
    }

    return(
        <DivDescExterna id={"DivDescExterna"} onClick={showDesc}>
            <DivDesc>
                <p>Descrição</p>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.5 9L18 1" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </DivDesc>
            {renderDesc}
        </DivDescExterna>
    )
}

export default DescCodigo;