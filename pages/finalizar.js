import Header from '../components/Header';
import Footer from '../components/Footer'
import styled from 'styled-components';


let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

const Finalizar = () => {
    return(
        <div>
            <Header/>
            <PageFinal>
                <TextPage>A sua compra foi finalizada com Sucesso.</TextPage>
                <TextPage>Enviaremos uma msg de confirmação para o seu email.</TextPage>
                <TextPage>Obrigado pela compra!</TextPage>
            </PageFinal>
            <Footer/>
        </div>     
    )
}

export default Finalizar;

export const PageFinal = styled.div`
    height: 575px;
`
export const TextPage = styled.p`
    font-size:14pt;
    font-weight:bold;
    text-align: center;
`