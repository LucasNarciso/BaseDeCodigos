import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Fundo = styled.div`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0px;
    backdrop-filter: blur(2px);
    animation: ${fadeIn} 0.2s ease-in-out;

    @media screen and (max-width: 400px){
        width: 100%;
    }

`



export const Gif = styled.img`
    
`