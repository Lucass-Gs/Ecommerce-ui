import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option``

const ProductList = () => {
    return (
       <Container>
           <Navbar/>
           <Announcement/>
           <title>Vestidos</title>
           <FilterContainer>
               <Filter>
                   <Filtertext>Filtrar Produtos:</Filtertext>
                  <Select>
                      <Option  disable selected>
                          Cor
                      </Option>
                      <Option>Branco</Option>
                      <Option>Preto</Option>
                      <Option>Vermelho</Option>
                      <Option>Azul</Option>
                      <Option>Amarelo</Option>
                      <Option>Verde</Option>
                  </Select>
                  <Select>
                  <Option disable selected>
                      Tamanho
                  </Option>
                  <Option>PP</Option>
                  <Option>P</Option>
                  <Option>M</Option>
                  <Option>G</Option>
                  <Option>GG</Option>
                  </Select>
                   </Filter>
               <Filter>
                   <Filtertext>Organizar Produtos:</Filtertext>
                   <Select>
                       <Option selected>Mais Novo</Option>
                       <Option>Preço (asc)</Option>
                       <Option>Preço (desc)</Option>
                   </Select>
                   </Filter>
           </FilterContainer>
           <Products/>
           <Newsletter/>
           <Footer/>
       </Container>
    )   
};

export default ProductList