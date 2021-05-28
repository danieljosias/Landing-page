import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';

let ColorPrimary = "#4169E1"
let ColorSecondary = "#87CEFA"

function Comprar() {
    return(
            <div>
                <Header/>
                    <TitleForm>Finalizar Compra</TitleForm>
                    <ContainerForm>
                        <Form>
                            <Label>Nome: </Label>
                            <Input type="name" required></Input>
                            
                            <Label>Número do cartão: </Label>
                            <Input type="name"></Input>
                            <br/>
                            
                            <Label>Código de segurança: </Label>
                            <Input type="password"></Input>
                            
                            <Label>Bandeira do cartão: </Label>
                            <Select>
                                <Option value="valor1">Selecione</Option>
                                <Option value="valor1">Visa</Option>
                                <Option value="valor1">Mastecard</Option>
                                <Option value="valor1">Elo</Option>
                                <Option value="valor1">Hipercard</Option>
                            </Select>
                            

                            <Label>Parcelas: </Label>
                            <Select>
                                <Option value="valor1">Selecione</Option>
                                <Option value="valor1">1</Option>
                                <Option value="valor1">2</Option>
                                <Option value="valor1">3</Option>
                            </Select>
                            <br/>
                            <Link href="/finalizar"><FormButton>Finalizar</FormButton></Link>
                        </Form>
                    </ContainerForm>

                <Footer/>
            </div>
        ) 
  }
  
export default Comprar

export const TitleForm = styled.h1`
    text-align: center;
    color:${ColorPrimary};
`
export const ContainerForm = styled.div`
    text-align: center;
    height: 510px;
`
export const Form = styled.form`
    
`
export const Label = styled.label`
    font-size: 14pt;
    font-weight:bold;
`
export const Input = styled.input`
    margin-right: 10px;
    margin-bottom: 20px;

    &:focus{
        background-color:${ColorSecondary};
    }
`
export const Select = styled.select`
    margin-right: 10px;
    width: 100px;

    &:focus{
        background-color:${ColorSecondary};
    }
`
export const Option = styled.option``

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
