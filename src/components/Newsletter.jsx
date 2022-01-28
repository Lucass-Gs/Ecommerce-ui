import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "60px", textAlign:"center" })}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #54ABF7;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Boletim de notícias</Title>
            <Desc>Receba constantes atualizações de seus produtos favoritos</Desc>
            <InputContainer>
                <Input placeholder="Seu email"/>
                <Button>
                    <Send/>
                </Button>            
            </InputContainer>

        </Container>
  )
}

export default Newsletter
