import styled from 'styled-components';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

const footer = () => {
    return(
        <Footer>
            <TextFooter>LoveAnimes &copy; 2021</TextFooter>
            <TextFooter>Contatos: (xx) x xxxx-xxxx</TextFooter>
            <TextFooter>Email: loveanimes@domínio.com</TextFooter>
        </Footer>      
    )
}

export default footer;

export const Footer = styled.footer`
    background-color: ${ColorPrimary};
    text-align: center;  
    padding: 10px;
`

export const TextFooter = styled.span`
    color: ${ColorSecondary};
    font-size: 18pt;
    font-weight: bold;
    margin-left: 10px;
    
`