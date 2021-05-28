import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

function Senha() {
    return(
            <div>
                <Header/>
                <ContainerForm>
                <FormTitle>Nova Senha</FormTitle>
                    <Form>
                        <Label>Senha: </Label>
                        <FormInput type="password" placeholder="Digite sua senha"/>

                        <Label>Nova Senha: </Label>
                        <FormInput type="password" placeholder="Digite novamente"/>
                        
                        <FormButton type="button">Criar</FormButton>
                        
                        <FormLink>
                            <Link href="/login">Já tem conta?</Link>
                            <Link href="/criar">Ainda não tem conta?</Link>
                        </FormLink>
                    </Form>
                    </ContainerForm>
                <Footer/>
            </div>
        ) 
  }
  
export default Senha
export const ContainerForm = styled.div`
    height: 570px;
`
export const FormTitle = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    border:1px solid #000;
    border-radius: 15px;
    height: 170px;
    width: 700px;   
    text-align: center;
    position: relative;
    left: 400px;
    padding: 30px 0 30px 0;

`
export const Label = styled.label`
    color:${ColorPrimary};
    font-size: 18pt;
    font-weight: bold;
`
export const FormInput = styled.input`
    border-radius: 15px;
    margin-top: 20px;
    margin-right:10px;
`

export const FormButton = styled.button`
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

export const FormLink = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-decoration: none;

`