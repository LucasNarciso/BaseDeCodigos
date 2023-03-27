//REACT
import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

//STYLED COMPONENTES
import { BotaoEntrar, DivAjudaMensagem, BotaoPequenoRedondo, Fundo, InputRegistro, Janela, LinkRegistro, Logo, NomeInputRegistro, SeparadorBotoes, SeparadorForm, Tempo, Titulo, DivTextoAjuda, TituloTextoDivAjuda, RegErro } from "../Styles/Registro_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS
import logo from "../Assets/Logo.svg"

//GLOBAL CONSTS
import { baseURL } from "../Global/Consts";

//ROUTES
import { useNavigate} from "react-router-dom";
import { goToLoginPage, goToHomePage, goToTokenPage } from "../Routes/Coordinator";

//COMPONENTS
import LoadingFullscreen from "../Components/Loading Fullscreen/LoadingFullscreen";


function Registro(){
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [loading, setLoading] = useState([]);
    var countDownDate = new Date(cookies.get('CodeBaseTokenExpire')).getTime();


    useEffect(() => {

        if(cookies.get('CodeBaseTokenUser') && cookies.get('CodeBaseTokenExpire')){
            timer(); 
        }else{
            goToTokenPage(navigate);
        }

    }, [])
    
    //Array utilizado para armazenar as mensagens de Ajuda
    const [ajuda, setAjuda] = useState([
        {key: 'ajudaUser', titulo: "Campo Usuario", texto: "Seu nome de usuário pode conter apenas A-a, 0-9 e underline, sem espaço e demais caracteres especiais" },
        {key: 'ajudaPassword', titulo: "Campo Senha", texto: "Sua senha deve conter de 4 a 32 caracteres" }
    ]);

    //Array utilizado pelo método de Renderização da Validade
    const [validade, setValidade] =useState([ { key: 'TempoValidadeToken', tempo:cookies.get('CodeBaseTokenExpire')} ])

    //Array utilizado pelo método de Renderização da Mensagem de Ajuda
    const [mensagemAjuda, setMensagemAjuda] = useState([])

    //Renderiza a mensagem de ajuda na tela
    const renderMensagemAjuda = mensagemAjuda.map((mensagem) => {

        return(
            <DivTextoAjuda id={mensagem.key} key={mensagem.key}>
                <TituloTextoDivAjuda>{mensagem.titulo} <BotaoPequenoRedondo onClick={() => {apagaMensagemAjuda(mensagem.key, true)}}>X</BotaoPequenoRedondo></TituloTextoDivAjuda> <br/> 
                {mensagem.texto}
            </DivTextoAjuda>
        )
    });

    const timer = () => {
        var x = setInterval(function() {

            var now = new Date().getTime();
            var distance = countDownDate - now;
            
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if(seconds.toString().split('').length == 1){ seconds = "0" + seconds}

            document.getElementById("tempo").innerHTML = minutes + ":" + seconds;
            
    
            if (distance <= 0) {
                clearInterval(x);
                document.getElementById("tempo").innerHTML = "Token expirado!";
            }
        }, 1000);
    }

    //Função que define a mensagem de ajuda após clicar no botão
    const defineMensagemAjuda = (tipo) => {
        let id = Math.random();

        //Define qual mensagem de ajuda vai aparecer na tela
        for (let i = 0; i < ajuda.length; i++) {
            if(ajuda[i].key === tipo){
                
                setMensagemAjuda([{key:id, titulo:ajuda[i].titulo, texto:ajuda[i].texto}])
            }
        }

        //Adiciona animação de Fade-In na mensagem de ajuda
        setTimeout(() => {

            if(document.getElementById(id)){ document.getElementById(id).style.opacity = "1"; }
        }, 100);

        //Adiciona animação de Fade-Out na mensagem de ajuda e apaga o elemento
        setTimeout(() => {

            if(document.getElementById(id)){ document.getElementById(id).style.opacity = "0"; }
            apagaMensagemAjuda(id);
        }, 7000);
    }

    //Apaga o elemento da Mensagem de Ajuda
    function apagaMensagemAjuda(id, noTime){
        if (document.getElementById(id) && noTime) {
            setMensagemAjuda([]);
        }else{
            setTimeout(() => {
                setMensagemAjuda([]);
            }, 200);
        }
    }

    const registrar = async () => {

        let inputRegUser = document.getElementById('usuario').value;
        let inputRegPass = document.getElementById('senha').value;
        let inputRegPassConfirm = document.getElementById('confirmarSenha').value;
        let tokenUser = cookies.get('CodeBaseTokenUser');
        
        let passvalid = ((inputRegPass === inputRegPassConfirm) ? true : false)

        if(passvalid){
            if(inputRegUser !== "" && inputRegUser !== " " && inputRegPass !== "" && inputRegPass !== " " && inputRegPassConfirm !== "" && inputRegPassConfirm !== " "){
                setLoading([{ key: Math.random() }])
    
                await axios.get(baseURL + "action=registrar&token=" + tokenUser + "&usuario=" + inputRegUser + "&senha=" + inputRegPass, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((resposta) =>{
                    setLoading([]);
    
                    if(resposta.data === "Usuario Registrado!"){
                        cookies.set('CodeBaseLoggedUser', inputRegUser, { path: '/', expires: new Date(Date.now()+(30*60000))});
                        cookies.set('CodeBaseLoggedPass', inputRegPass, { path: '/', expires: new Date(Date.now()+(30*60000))});
                        cookies.remove('CodeBaseTokenUser');
                        cookies.remove('CodeBaseTokenExpire');
                        goToHomePage(navigate);
                    }else{
                        document.getElementById('RegistroErroResposta').innerHTML = resposta.data;
                    }
                    
    
                }).catch((err) => {
                    setLoading([]);
                    console.log("Erro na Requisição: " + err.menssage)
                })
            }else{
                document.getElementById('RegistroErroResposta').innerHTML = "Preencha todos os campos!";
            }
        }else{
            document.getElementById('RegistroErroResposta').innerHTML = "As senhas não coincidem";
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
                    
                    <Titulo>Registrar</Titulo>

                    <SeparadorForm>
                        <NomeInputRegistro>
                            <p>Usuário: </p>
                            <BotaoPequenoRedondo onClick={()=> {defineMensagemAjuda('ajudaUser')}}>?</BotaoPequenoRedondo>
                        </NomeInputRegistro>
                        <InputRegistro name={'usuario'} id={'usuario'} type={"text"} autoComplete={"username"}/>
                    </SeparadorForm>

                    <SeparadorForm>
                        <NomeInputRegistro>
                            <p>Senha:</p>
                            <BotaoPequenoRedondo onClick={()=> {defineMensagemAjuda('ajudaPassword')}}>?</BotaoPequenoRedondo>
                        </NomeInputRegistro>
                        <InputRegistro name={'senha'} id={'senha'} type={"password"} autoComplete={"password"} maxLength={8}/>
                    </SeparadorForm>

                    <SeparadorForm>
                        <NomeInputRegistro>Confirme a senha:</NomeInputRegistro>
                        <InputRegistro name={'confirmar senha'} id={'confirmarSenha'} type={"password"} autoComplete={"new-password"} maxLength={8}/>
                    </SeparadorForm>

                    <SeparadorBotoes>
                        <LinkRegistro onClick={() => {goToLoginPage(navigate)}}>Entrar</LinkRegistro>
                        <BotaoEntrar onClick={() => {registrar()}}>REGISTRAR</BotaoEntrar>
                    </SeparadorBotoes>

                </Janela>
                
                <RegErro id={"RegistroErroResposta"}></RegErro>
                <Tempo id={'tempo'}>--:--</Tempo>

                <DivAjudaMensagem id="DivAjudaMensagem">
                    {renderMensagemAjuda}
                </DivAjudaMensagem>

            </Fundo>
            {renderLoading}
        </>
    )
}


export default Registro;