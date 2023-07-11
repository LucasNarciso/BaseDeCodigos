//REACT
import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

//STYLED COMPONENTES
import { BarraControle, Fundo, JanelaDescCodigo, JanelaPrincipal, Titulo, Logo, DivLogoTitulo, DivBotoes, BotaoBarraControle, DivBarraPesquisa, BotaoFiltro, BarraPesquisa, InputPesquisa, BotaoPesquisa, DivExternaResultadoPesquisa, DivInternaResultadoPesquisa, BarraPage, BotaoBarraPage, DivTesteResultado } from "../Styles/Home_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ASSETS
import logo from "../Assets/Logo.svg"

//ROUTES
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToPainelPage, goToPerfilPage } from "../Routes/Coordinator";

//GLOBAL CONSTS
import { baseURL } from "../Global/Consts";

//COMPONENTS
import DescCodigo from "../Components/Descrição Código/DescCodigo";
import Codigo from "../Components/Código/Codigo";
import CardResultado from "../Components/Card Resultado/CardResultado";
import ModalCodigo from "../Components/Modal Código/ModalCodigo";
import LoadingFullscreen from "../Components/Loading Fullscreen/LoadingFullscreen";

function Home(){

    const navigate = useNavigate()
    const cookies = new Cookies();
    const [modal, setModal] = useState([])
    const [loading, setLoading] = useState([]);
    const [codeInfo, setCodeInfo] = useState([ {} ]);
    const [resultadoSearch, setresultadoSearch] = useState([
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 1", descDet: "Descrição mais detalhada do código 1", ling: "JS", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 1"},
        {descRes: "Descrição resumida 2", descDet: "Descrição mais detalhada do código 2", ling: "PHP", upl: "Upload: 00/00/0000", mod: "Modificado: 00/00/0000", code:"teste 2"}
    ]);

    useEffect(() => {

        if(!cookies.get('CodeBaseLoggedUser')){
            goToLoginPage(navigate);
        }

    }, [])


    const renderLoading = loading.map((load)=>{     return( <LoadingFullscreen key={load.key}/> )    })

    const renderModalCodigo = modal.map((mod) => {

        var tituloModal = "";
        if (mod.tipo === "editar") {
            tituloModal = "Editar Código"
        }else{
            tituloModal = "Adicionar Código"
        }
        return(
            <ModalCodigo key={Math.random()} titulo={tituloModal} tipo={"Adicionar"} function={()=>{exitModal()}}/>
        )
    });

    function showModal(tipo){       setModal([{ key: "modal", tipo: tipo }]);       }

    function exitModal(){       setModal([]);       }

    const renderCardsResultado = resultadoSearch.map((card)=>{
        return(
            <CardResultado key={Math.random()} func={()=>{setCodeInfo([ {desc:card.descDet, code:card.code, ling: card.ling} ])}} desc={card.descRes} linguagem={card.ling} upload={card.upl} modificado={card.mod}/>
        )
    })
    
    const renderCode = codeInfo.map((code)=>{
        return(
            <Codigo key={Math.random()} linguagem={code.ling} code={code.code} func={showModal.bind(this)}/>
        )
    })

    const renderDescCode = codeInfo.map((code)=>{
        return(
            <DescCodigo key={Math.random()} descDetalhada={code.desc}/>
        )
    })

    const pesquisarCodigo = async () => {
        let pesquisa = document.getElementById('CampoPesquisa').value;

        if( pesquisa !== "" && pesquisa !== " "){
            setLoading([{ key: Math.random() }])

            await axios.get(baseURL + "?action=pesquisa&userID=" + cookies.get('CodeBaseLoggedUser') + "&coluna=" + 6 + "&pesquisa=" + pesquisa, {
                headers: {
                "Content-Type": "application/json"
                }
            }).then((resposta) =>{
                setLoading([]);
                console.log(resposta.dados)
                if(resposta.dados.exec !== true){
                    //asdasdas
                }

            }).catch((err) => {
                setLoading([]);
                console.log(err.menssage)
            })
        }
    }

    return(
        <>  
            <GlobalStyle/>
            <Fundo>

                <JanelaPrincipal>

                    <BarraControle>
                        <DivLogoTitulo>
                            <Logo src={logo}></Logo>
                            <Titulo>Base de Códigos</Titulo>
                        </DivLogoTitulo>
                        <DivBotoes>
                            <BotaoBarraControle onClick={() => {goToPerfilPage(navigate)}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 4.8C12.8 7.45097 10.651 9.6 8 9.6C5.34903 9.6 3.2 7.45097 3.2 4.8C3.2 2.14903 5.34903 0 8 0C10.651 0 12.8 2.14903 12.8 4.8Z" fill="#F06449"/><path d="M0 16C0 13.349 2.14903 11.2 4.8 11.2H11.2C13.851 11.2 16 13.349 16 16H0Z" fill="#F06449"/></svg>
                            </BotaoBarraControle>
                            <BotaoBarraControle onClick={() => {cookies.remove('CodeBaseLoggedUser', { path: '/' }); goToLoginPage(navigate)}}>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.00867C9 0.74345 8.89464 0.489097 8.70711 0.30156C8.51957 0.114024 8.26522 0.00866699 8 0.00866699C7.73478 0.00866699 7.48043 0.114024 7.29289 0.30156C7.10536 0.489097 7 0.74345 7 1.00867L6.997 9.01167C6.997 9.27688 7.10236 9.53124 7.28989 9.71877C7.47743 9.90631 7.73178 10.0117 7.997 10.0117C8.26222 10.0117 8.51657 9.90631 8.70411 9.71877C8.89164 9.53124 8.997 9.27688 8.997 9.01167L9 1.00867Z" fill="#F06449"/><path d="M0 9.99167C0 7.78167 0.895 5.78167 2.343 4.33467L3.757 5.74867C2.91785 6.58777 2.34636 7.65686 2.11482 8.82076C1.88327 9.98466 2.00207 11.1911 2.45618 12.2875C2.9103 13.3838 3.67933 14.3209 4.66604 14.9802C5.65274 15.6395 6.8128 15.9914 7.9995 15.9914C9.1862 15.9914 10.3463 15.6395 11.333 14.9802C12.3197 14.3209 13.0887 13.3838 13.5428 12.2875C13.9969 11.1911 14.1157 9.98466 13.8842 8.82076C13.6526 7.65686 13.0812 6.58777 12.242 5.74867L13.657 4.33467C14.5872 5.26495 15.2737 6.41029 15.6556 7.66924C16.0374 8.92818 16.1029 10.2619 15.8463 11.5522C15.5896 12.8425 15.0187 14.0496 14.1841 15.0665C13.3495 16.0835 12.2769 16.8789 11.0615 17.3824C9.84607 17.8859 8.52522 18.0818 7.21597 17.9529C5.90671 17.8239 4.64946 17.3741 3.55558 16.6432C2.46169 15.9123 1.56493 14.923 0.944738 13.7628C0.324541 12.6025 4.79384e-05 11.3073 0 9.99167Z" fill="#F06449"/></svg>
                            </BotaoBarraControle>
                            <BotaoBarraControle onClick={()=>{showModal('adicionar')}}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1V13" stroke="#F06449" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 7L1 7" stroke="#F06449" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </BotaoBarraControle>
                            <BotaoBarraControle onClick={() => {goToPainelPage(navigate)}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="10" height="10" fill="#F06449"/><rect x="13.5" y="0.5" width="10" height="10" fill="#F06449"/><rect x="13.5" y="13.5" width="10" height="10" fill="#F06449"/><rect x="0.5" y="13.5" width="10" height="10" fill="#F06449"/></svg>
                            </BotaoBarraControle>
                        </DivBotoes>
                    </BarraControle>

                    <DivBarraPesquisa>
                        <BotaoFiltro>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20208 10.6858V15.7857C9.20208 16.4563 8.69408 17 8.06736 17H6.93264C6.30592 17 5.79792 16.4563 5.79792 15.7857V10.6858L0.199109 1.89836C-0.314439 1.09229 0.225011 0 1.13665 0H13.8633C14.775 0 15.3144 1.09229 14.8009 1.89836L9.20208 10.6858Z" fill="#D9D9D9"/></svg>
                        </BotaoFiltro>
                        <BarraPesquisa>
                            <InputPesquisa id="CampoPesquisa">
                            </InputPesquisa>
                            <BotaoPesquisa onClick={()=>{pesquisarCodigo()}}>
                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.8701 17.7208C16.5082 17.3589 15.9344 17.3338 15.5081 17.6168C14.0045 18.6151 12.2003 19.1967 10.2602 19.1967C5.01349 19.1967 0.760193 14.9434 0.760193 9.69666C0.760193 4.44995 5.01349 0.196655 10.2602 0.196655C15.5069 0.196655 19.7602 4.44995 19.7602 9.69666C19.7602 11.6367 19.1786 13.441 18.1803 14.9446C17.8973 15.3709 17.9224 15.9447 18.2843 16.3066L23.0739 21.0962C23.4644 21.4867 23.4644 22.1198 23.0739 22.5104C22.6833 22.9009 22.0502 22.9009 21.6597 22.5104L16.8701 17.7208ZM17.7602 9.69666C17.7602 13.8387 14.4023 17.1967 10.2602 17.1967C6.1181 17.1967 2.76019 13.8387 2.76019 9.69666C2.76019 5.55457 6.1181 2.19666 10.2602 2.19666C14.4023 2.19666 17.7602 5.55457 17.7602 9.69666Z" fill="white"/></svg>
                            </BotaoPesquisa>
                        </BarraPesquisa>
                    </DivBarraPesquisa>

                    <DivExternaResultadoPesquisa>
                        <DivInternaResultadoPesquisa>
                            <DivTesteResultado>
                                {(resultadoSearch.length !== 0) ? renderCardsResultado : <p>Realize uma pesquisa</p>}
                            </DivTesteResultado>
                        </DivInternaResultadoPesquisa>
                        <BarraPage>
                            <BotaoBarraPage><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.5L1.5 8L8 14.5" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></BotaoBarraPage>
                            1...10
                            <BotaoBarraPage><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L7.5 8L1 14.5" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></BotaoBarraPage>
                        </BarraPage>
                    </DivExternaResultadoPesquisa>
                    
                </JanelaPrincipal>

                <JanelaDescCodigo>
                    {renderDescCode}
                    {renderCode}
                </JanelaDescCodigo>
                {renderModalCodigo}
                {renderLoading}
            </Fundo>
        </>
    )
}

export default Home;