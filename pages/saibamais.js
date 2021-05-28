import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styled from 'styled-components';

import Image from 'next/image';
import card1 from '../public/card1.jpg'
import card2 from '../public/card2.jpg'
import card3 from '../public/card3.png'
import card4 from '../public/card4.png'
import card5 from '../public/card5.png'
import card6 from '../public/card6.jpg'
import card7 from '../public/card7.jpg'
import card8 from '../public/card8.png'
import card9 from '../public/card9.png'
import card10 from '../public/card10.jpg'
import card11 from '../public/card11.png'
import card12 from '../public/card12.jpg'

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

function SaibaMais() {
    return(
            <div>
                <Header/>
                    <TitleCard>Colecionáveis</TitleCard>
                    <ContainerCard>
                        <Card>
                            <CardInner>
                                <Image src={card1} alt='pikachu' width={200} height={200}></Image>
                                <CardText>Miniatura Pikachu: Pokémon </CardText>
                                <Link href="/comprar"><CardButton>Comprar</CardButton></Link>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card2} alt='itachi' width={200} height={200}></Image>
                                <CardText>Miniatura Itachi: Shippuden </CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card3} alt='goku' width={200} height={200}></Image>
                                <CardText>Miniatura Goku: Dragon Ball Z </CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card4} alt='seiya' width={200} height={200}></Image>
                                <CardText>Miniatura Seiya: Saint Seiya</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                    </ContainerCard>
                    <ContainerCard>
                        <Card>
                            <CardInner>
                                <Image src={card5} alt='monkey' width={200} height={200}></Image>
                                <CardText>Miniatura Monkey: One Piece</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card6} alt='yugi moto' width={200} height={200}></Image>
                                <CardText>Miniatura Yugi Muto: Yu gi oh </CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card7} alt='Gon Freecss' width={200} height={200}></Image>
                                <CardText>Miniatura Gon Freecss: Hunter </CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card8} alt=' Light Yagami' width={200} height={200}></Image>
                                <CardText>Miniatura Yagami: Death Note</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                    </ContainerCard>
                    <ContainerCard>
                        <Card>
                            <CardInner>
                                <Image src={card9} alt='sasuke' width={200} height={200}></Image>
                                <CardText>Miniatura Sasuke: Shippuden</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card10} alt='ash' width={200} height={200}></Image>
                                <CardText>Miniatura Ash: Pokémon </CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card11} alt='vedita' width={200} height={200}></Image>
                                <CardText>Miniatura Vedita: Dragon Ball Z</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                        <Card>
                            <CardInner>
                                <Image src={card12} alt=' Light Yagami' width={200} height={200}></Image>
                                <CardText>Miniatura Mu: Saint Seiya</CardText>
                                <CardButton>Comprar</CardButton>
                            </CardInner>
                        </Card>
                    </ContainerCard> 
                <Footer/>
            </div>
        ) 
  }
  
  export default SaibaMais

  export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-evenly;
  `
  export const TitleCard = styled.h1`
    text-align: center;
    color:${ColorPrimary};
`
  export const Card = styled.div`
    border: 6px double ${ColorPrimary};
    width: 300px;
    height: 320px;
    cursor: pointer;
    margin-bottom: 20px;
  `
  export const CardInner = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
  `
  export const CardText = styled.p`
    font-size:14pt;
    font-weight: bold;
  `
  export const CardButton = styled.button`
        width: 250px;
        background-color: ${ColorPrimary};
        font-size: 14pt;
        font-weight: bold;
        margin-top: 20px;
        cursor:pointer;
        
        &:hover{
            color:${ColorSecondary};
        }
  `