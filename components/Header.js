import styled from 'styled-components'
import Link from 'next/link';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

const header = () => {
    return(
        <Header>
            <Nav>
                <Link href="/">
                <Logo>
                    LoveAnimes
                </Logo>
                
                </Link>
                
                <Link href="/login"><ButtonNav>Log in</ButtonNav></Link>
            </Nav>
        </Header>
    )
}

export default header;

export const Header = styled.header`
    background-color: ${ColorPrimary};
    padding: 10px;
    text-align: center;  
    height: 25px;
`
export const Nav = styled.nav`
    
`
export const Logo = styled.span`
    color:${ColorSecondary};
    float: left;
    font-size: 18pt;
    font-weight: bold;
    cursor: pointer;
`

export const ButtonNav = styled.button`
    float: right;
    font-size: 14pt;
    font-weight: bold;
    cursor: pointer;
    border-radius: 15px;
    color:${ColorSecondary};
    
`
