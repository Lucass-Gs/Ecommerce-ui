import { Link } from '@material-ui/core';
import { GitHub, LinkedIn, MailOutline, Phone } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`   
    display: flex;
    ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
       <Left>
           <Logo>Roupp.</Logo>
           <Desc>Site desenvolvido para estudo.
           </Desc>
           <SocialContainer>
               <SocialIcon color="0A66C2">
                    <Link style={{color:"white"}}
                    href="https://www.linkedin.com/in/lucas-gabriel-979723164/"
                    onClick={() => {
                    alert("Redirecionando para o Linkedin");
                    }}
                    >
                    <LinkedIn/>
                    </Link>
                   
               </SocialIcon>
               <SocialIcon color="161B22">
                    <Link style={{color:"white"}}
                    href="https://github.com/Lucass-Gs"
                    onClick={() => {
                    alert("Redirecionando para o GitHub");
                    }}
                        >
                    <GitHub/>
                    </Link>
                                        
               </SocialIcon>
           </SocialContainer>
           </Left>         
       <Center>
           <Title>Links Úteis</Title>
           <List>
               <ListItem>Início</ListItem>
               <ListItem>Carinho</ListItem>
               <ListItem>Moda Masculina</ListItem>
               <ListItem>Moda Feminina</ListItem>
               <ListItem>Acessórios</ListItem>
               <ListItem>Minha Conta</ListItem>
               <ListItem>Rastreamento de Pedidos</ListItem>
               <ListItem>Lista de Desejos</ListItem>
               <ListItem>Lista de Desejos</ListItem>
               <ListItem>Termos</ListItem>
           </List>
           </Center>         
       <Right>
           
           <Title>Contato</Title>
           <ContactItem>
               <MailOutline style={{marginRight:"10px"}}/> lucasgabriel153@gmail.com
           </ContactItem>
           <ContactItem>
               <Phone style={{marginRight:"10px"}}/> 12 99682-1201
           </ContactItem>
           <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
           </Right>         
        </Container>
  );
};

export default Footer;
