import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 200;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #54ABF7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 1px solid #54ABF7;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }

`



export const Product = () => {
        return  (
            <Container>
               <Announcement/>
               <Navbar/>
               <Wrapper>
                   <ImgContainer>
                   <Image src="https://cea.vtexassets.com/arquivos/ids/42398032-1200-auto?v=637593775107730000&width=1200&height=auto&aspect=true"/>
                   </ImgContainer>
                   <InfoContainer>
                       <Title>Macacão Jeans</Title>
                       <Desc>Macacão masculino confeccionado em jeans. A lavagem destroyed tem rasgos e puídos. Tem caimento soltinho. Possui três bolsos frontais e dois posteriores. O fechamento é lateral por botões e superior pelas alças ajustáveis. A cintura tem passantes.</Desc>
                       <Price>R$20,00</Price>
                       <FilterContainer>
                           <Filter>
                               <FilterTitle>Cor</FilterTitle>
                               <FilterColor color="black"/>
                               <FilterColor color="darkblue"/>
                               <FilterColor color="gray"/>
                               </Filter>
                               <Filter>
                                   <FilterTitle>Tamanho</FilterTitle>
                                   <FilterSize>
                                       <FilterSizeOption>PP</FilterSizeOption>
                                       <FilterSizeOption>P</FilterSizeOption>
                                       <FilterSizeOption>M</FilterSizeOption>
                                       <FilterSizeOption>G</FilterSizeOption>
                                       <FilterSizeOption>GG</FilterSizeOption>
                                   </FilterSize>
                               </Filter>
                       </FilterContainer>
                       <AddContainer>
                           <AmountContainer>
                               <Remove/>
                               <Amount>1</Amount>
                               <Add/>
                           </AmountContainer>
                           <Button>Adicionar ao Carinho</Button>
                       </AddContainer>
                   </InfoContainer>
               </Wrapper>
               <Newsletter/>
               <Footer/>
            </Container>
        )
}

    export default Product