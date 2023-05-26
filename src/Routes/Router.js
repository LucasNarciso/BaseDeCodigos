//REACT
import { HashRouter, Routes, Route } from "react-router-dom";

//PÁGINAS
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Token from "../Pages/Token";
import Erro from "../Pages/Erro";
import Painel from "../Pages/Painel";
import Perfil from "../Pages/Perfil";
import Graficos from "../Pages/Graficos";


export const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/token"} element={<Token/>}/>
                <Route path={"/registro"} element={<Registro/>}/>
                <Route path={"/painel"} element={<Painel/>}/>
                <Route path={"/perfil"} element={<Perfil/>}/>
                <Route path={"/graficos"} element={<Graficos/>}/>
                <Route path={"*"} element={<Erro/>}/>
                {/* <Route path={"/detalhes/"} element={<Detalhe_Pokemon/>}/> */}
            </Routes>
        </HashRouter>
    )
}