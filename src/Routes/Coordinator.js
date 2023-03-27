
export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToTokenPage = (navigate) => {
    navigate(`/token`)
}

export const goToRegistroPage = (navigate) => {
    navigate(`/registro`)
}

export const goToLoginPage = (navigate) => {
    navigate(`/login`)
}

export const goToPainelPage = (navigate) => {
    navigate(`/painel`)
}

export const goToPerfilPage = (navigate) => {
    navigate(`/perfil`)
}

export const goToGraficosPage = (navigate) => {
    navigate(`/graficos`)
}


// export const goToDetailPage = (navigate, id) => {
//     navigate(`/detalhes/${id}`)
// }

export const goBack = (navigate) => {
    navigate(-1)
}