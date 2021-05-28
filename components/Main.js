import styled from 'styled-components';
import Link from 'next/link';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"
let ColorTertiary = "#000"

const main = () => {
    return(
        <Main>
            <MainTitle>LoveAnimes</MainTitle>
            <MainText>Você é apaixonado por animes? Então você está no lugar certo! </MainText>
            <MainText>Aqui você encontrará a estátua do seu personagem favorito.</MainText>
            <Link href="/saibamais"><MainButton>Saiba Mais</MainButton></Link>
        </Main>      
    )
}

export default main;

export const Main = styled.main`
    text-align: center;
    height: 490px;
    margin-top: 100px;
`
export const MainTitle = styled.h1`
    font-size: 25pt;
    color:${ColorPrimary};
`
export const MainText = styled.p`
    font-size: 20pt;
`
export const MainButton = styled.button`
    background-color: ${ColorPrimary};
    height: 50px;
    width: 150px;
    color:${ColorTertiary};
    font-size: 12pt;
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;

    &:hover{
        color:${ColorSecondary};
    }

`