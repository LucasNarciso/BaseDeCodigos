//REACT
import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

//STYLED COMPONENTES
import { BotaoEntrar, Fundo, InputLogin, Janela, LinkRegistro, LoginErro, Logo, SeparadorBotoes, SeparadorForm, Titulo } from "../Styles/Login_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS
import logo from "../Assets/Logo.svg"

//GLOBAL CONSTS
import { baseURL } from "../Global/Consts";

//ROUTES
import { useNavigate} from "react-router-dom";
import { goToTokenPage, goToHomePage} from "../Routes/Coordinator";

//COMPONENTS
import LoadingFullscreen from "../Components/Loading Fullscreen/LoadingFullscreen";


function Login(){
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [loading, setLoading] = useState([]);

    useEffect(() => {

        if(cookies.get('CodeBaseLoggedUser')){
            goToHomePage(navigate);
        }  

    }, [])


    const login = async () => {

        let inputUserValue = document.getElementById('inputUsuario').value;
        let inputPassValue = document.getElementById('inputSenha').value;
        if( inputUserValue != "" && inputUserValue != " " && inputPassValue != "" && inputPassValue != " "){
            setLoading([{ key: Math.random() }])

            await axios.get(baseURL + "?action=login&usuario=" + inputUserValue + "&senha=" + inputPassValue, {
                headers: {
                "Content-Type": "application/json"
                }
            }).then((resposta) =>{
                setLoading([]);
                if(resposta.data.exec === true){
                    cookies.set('CodeBaseLoggedUser', resposta.data.dados, { path: '/', expires: new Date(Date.now()+(30*60000))});
                    goToHomePage(navigate);
                }else{
                    document.getElementById('LoginErroResposta').innerHTML = resposta.data.mensagem;
                }
            }).catch((err) => {
                setLoading([]);
                console.log(err.menssage)
            })
        }else{
            document.getElementById('LoginErroResposta').innerHTML = "Preencha todos os campos!";
        }
    }

    const renderLoading = loading.map((load)=>{
        return(
            <LoadingFullscreen key={load.key}/>
        )
    })

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            login();
        }
    }

    return(
        <>  
            <GlobalStyle/>
            <Fundo id={"Fundo"}>

                <Logo src={logo}/>

                <Janela onKeyDown={handleKeyPress}>
                    
                    <Titulo>Login</Titulo>

                    <SeparadorForm>
                        <p>Usuário:</p>
                        <InputLogin id={"inputUsuario"} type={"text"}/>
                    </SeparadorForm>

                    <SeparadorForm>
                        <p>Senha:</p>
                        <InputLogin id={"inputSenha"} type={"password"}/>
                    </SeparadorForm>

                    <SeparadorBotoes>
                        <LinkRegistro onClick={() => {goToTokenPage(navigate)}}>Registrar-se</LinkRegistro>
                        <BotaoEntrar onClick={login}>ENTRAR</BotaoEntrar>
                    </SeparadorBotoes>

                </Janela>
                <LoginErro id={"LoginErroResposta"}> </LoginErro>
            </Fundo>
            {renderLoading}
        </>
    )
}


export default Login;