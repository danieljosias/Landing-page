import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

function Criar() {
    return(
            <div>
                <Header/>
                <ContainerForm>
                <FormTitle>Criar Conta</FormTitle>
                    <Form>
                        <Label>First Name: </Label>
                        <FormInput type="text" placeholder="Digite seu nome"/>
                        <br/>

                        <Label>Last Name: </Label>
                        <FormInput type="text" placeholder="Digite seu sobrenome"/>
                        <br/>

                        <Label>Email: </Label>
                        <FormInput type="text" placeholder="Digite seu email"/>
                        <br/>

                        <Label>Senha: </Label>
                        <FormInput type="password" placeholder="Digite sua senha"/>
                        <br/>
                        
                        <FormButton type="button">Criar</FormButton>
                        
                        <FormLink>
                            <Link href="/login">Já tem conta?</Link>
                            <Link href="/senha">Esqueceu a senha?</Link>
                        </FormLink>
                    </Form>
                    </ContainerForm>
                <Footer/>
            </div>
        ) 
  }
  
export default Criar
export const ContainerForm = styled.div`
    height: 570px;
`
export const FormTitle = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    border: 1px solid black;
    border-radius: 15px;
    height: 270px;
    width: 330px;   
    text-align: center;
    position: relative;
    left: 580px;
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