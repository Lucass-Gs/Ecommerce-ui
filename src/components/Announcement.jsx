import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #54ABF7;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
      <Container>
          Super Oferta! Frete grátis nas compras acima de R$50,00
      </Container>
   )
}

export default Announcement