//REACT
import React, {useState, useEffect} from "react";

//STYLED COMPONENTS
import { BotaoApagarLinguagem, BotaoEditarInput, BotaoLinguagens, BotaoSalvar, BotaoVoltar, CheckTema, ConteudoLinguagens, ConteudoTema, DivBotoes, DivColuna, DivConteudo, DivInput, DivInputLinguagens, DivLinguagens, DivTema, DivTituloInput, Fundo, Input, InputLinguagens, Janela, Linguagem, Tema, TemaPaleta, TemaSeparador } from "../Styles/Perfil_Style";
import { GlobalStyle } from "../Styles/GlobalStyle";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";


function Perfil() {
    
    const navigate = useNavigate()

    return(
        <>
            <GlobalStyle/>
            <Fundo>
                <Janela>
                    <p>Perfil</p>
                    <DivConteudo>
                        <DivColuna>

                            <DivTituloInput>
                                <p>Nome:</p>
                                <DivInput>
                                    <Input type={"text"}/>
                                    <BotaoEditarInput><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2888 3.41918C13.5704 3.13755 13.5704 2.66817 13.2888 2.40099L11.599 0.711221C11.3318 0.429593 10.8624 0.429593 10.5808 0.711221L9.25212 2.0327L11.9601 4.74066M0.5 10.792V13.5H3.20796L11.1946 5.50611L8.48667 2.79815L0.5 10.792Z" fill="white"/></svg></BotaoEditarInput>
                                </DivInput>
                            </DivTituloInput>

                            <DivTituloInput>
                                <p>Senha:</p>
                                <DivInput>
                                    <Input type={"text"}/>
                                    <BotaoEditarInput><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2888 3.41918C13.5704 3.13755 13.5704 2.66817 13.2888 2.40099L11.599 0.711221C11.3318 0.429593 10.8624 0.429593 10.5808 0.711221L9.25212 2.0327L11.9601 4.74066M0.5 10.792V13.5H3.20796L11.1946 5.50611L8.48667 2.79815L0.5 10.792Z" fill="white"/></svg></BotaoEditarInput>
                                </DivInput>
                            </DivTituloInput>
                            
                            <DivTema>
                                <p>Tema:</p>
                                <ConteudoTema>
                                    <Tema>
                                        <TemaSeparador> 1 <CheckTema/></TemaSeparador>
                                        <TemaSeparador>
                                            <TemaPaleta style={{backgroundColor: '#F06449'}}/>
                                            <TemaPaleta style={{backgroundColor: '#EDE6E3'}}/>
                                            <TemaPaleta style={{backgroundColor: '#DADAD9'}}/>
                                        </TemaSeparador>
                                    </Tema>
                                    <Tema>
                                        <TemaSeparador> 2 <CheckTema/></TemaSeparador>
                                        <TemaSeparador>
                                            <TemaPaleta style={{backgroundColor: '#B8B8AA'}}/>
                                            <TemaPaleta style={{backgroundColor: '#DDD5D0'}}/>
                                            <TemaPaleta style={{backgroundColor: '#CFC0BD'}}/>
                                        </TemaSeparador>
                                    </Tema>
                                    <Tema>
                                        <TemaSeparador> 3 <CheckTema/></TemaSeparador>
                                        <TemaSeparador>
                                            <TemaPaleta style={{backgroundColor: '#373F47'}}/>
                                            <TemaPaleta style={{backgroundColor: '#AAABBC'}}/>
                                            <TemaPaleta style={{backgroundColor: '#8B8982'}}/>
                                        </TemaSeparador>
                                    </Tema>
                                </ConteudoTema>
                            </DivTema>
                        </DivColuna>
                        <DivColuna>
                            <p>Linguagens:</p>
                            <DivLinguagens>
                                <ConteudoLinguagens>
                                    <Linguagem>
                                        JS 
                                        <BotaoApagarLinguagem><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#F06449"/></svg></BotaoApagarLinguagem>    
                                    </Linguagem>
                                </ConteudoLinguagens>
                                <DivInputLinguagens>
                                    <InputLinguagens/>
                                    <BotaoLinguagens><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1V13" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 7L1 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></BotaoLinguagens>
                                </DivInputLinguagens>
                            </DivLinguagens>
                        </DivColuna>
                    </DivConteudo>
                    <DivBotoes>
                        <BotaoVoltar onClick={()=>{goBack(navigate)}}>VOLTAR</BotaoVoltar>
                        <BotaoSalvar>SALVAR</BotaoSalvar>
                    </DivBotoes>
                </Janela>
            </Fundo>
        </>
    )
}

export default Perfil;