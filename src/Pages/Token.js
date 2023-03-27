//REACT
import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

//STYLED COMPONENTES
import { BotaoEntrar, Fundo, InputToken, Janela, BotaoVoltar, Logo, SeparadorBotoes, SeparadorForm, Titulo, TokenErro } from "../Styles/Token_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS
import logo from "../Assets/Logo.svg"

//GLOBAL CONSTS
import { baseURL } from "../Global/Consts";

//ROUTES
import { useNavigate} from "react-router-dom";
import { goBack, goToRegistroPage } from "../Routes/Coordinator";

//COMPONENTS
import LoadingFullscreen from "../Components/Loading Fullscreen/LoadingFullscreen";

function Token(){
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [loading, setLoading] = useState([]);

    function adicionaMinutos(minutos) {
        let data = new Date();
        data.setMinutes(data.getMinutes() + minutos);
        
        return data;
    }

    const token = async () => {

        let inputTokenValue = document.getElementById('tokenInput').value;

        if( inputTokenValue !== "" && inputTokenValue !== " "){
            setLoading([{ key: Math.random() }])

            await axios.get(baseURL + "action=token&token=" + inputTokenValue, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((resposta) =>{
                setLoading([]);

                if(resposta.data === true){
                    if(!cookies.get('CodeBaseTokenUser') && !cookies.get('CodeBaseTokenExpire')){
                        cookies.set('CodeBaseTokenUser', inputTokenValue, { path: '/', expires: new Date(Date.now()+(30*60000))});
                        cookies.set('CodeBaseTokenExpire', adicionaMinutos(30), { path: '/', expires: new Date(Date.now()+(30*60000))});
                    }
                    goToRegistroPage(navigate);
                }else{
                    document.getElementById('TokenErroResposta').innerHTML = resposta.data;
                }
                

            }).catch((err) => {
                setLoading([]);
                console.log("Erro na Requisição: " + err.menssage)
            })
        }else{
            document.getElementById('TokenErroResposta').innerHTML = "Preencha o campo!";
        }
    }

    const renderLoading = loading.map((load)=>{
        return(
            <LoadingFullscreen key={load.key}/>
        )
    })

    return(
        <>  
            <GlobalStyle/>
            <Fundo>

                <Logo src={logo}/>

                <Janela>
                    
                    <Titulo>Token</Titulo>

                    <SeparadorForm>
                        <InputToken type={"text"} id={"tokenInput"}/>
                    </SeparadorForm>

                    <SeparadorBotoes>
                        <BotaoVoltar onClick={() => {goBack(navigate)}}>VOLTAR</BotaoVoltar>
                        <BotaoEntrar onClick={() => {token()}}>VALIDAR</BotaoEntrar>
                    </SeparadorBotoes>

                </Janela>
                <TokenErro id={"TokenErroResposta"}></TokenErro>
            </Fundo>
            {renderLoading}
        </>
    )
}


export default Token;