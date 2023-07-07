import styled from "styled-components";

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;

`

export const BotaoNav = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #393939;

    &:hover{
        width: 20vw;
        height: 3.2vh;
        padding: 1vw;
        border-radius: 15px;
        background-color: #F9d03f;
        color: #696969;
    }
`
export const ImgNav = styled.img`
    height: 3vh
`