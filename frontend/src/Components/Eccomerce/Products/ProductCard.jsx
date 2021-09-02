import styled from 'styled-components';
import {BsPlusSquareFill} from 'react-icons/bs'
const AddToCartIcon = styled.div `
position: absolute;
  right: 20px;
  
`;

const CardTitle = styled.h2`
   color: black;
  font-size: 18px;
  font-weight: bold;
`

const CardImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 9px;
  //transition: all 300ms ease-in-out;
  //&:hover{
  //  max-width: 150px;
  //  max-height: 150px;
  //}
`
const SelfProductCard = styled.figure`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 135px;
  border: 1px solid gray;
  border-radius: 9px;
  cursor: pointer;
  padding: 12px;
  position: relative;
  transition: all 300ms ease-in-out;

  &:hover{
    background-color: gray;
  }
`
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`

const Price = styled.p `
  font-size: 18px;
  font-weight: bold;
`;
const Description = styled.p `

`;



const ProductCard = ({image, name, price, description}) => {


    return (
        <SelfProductCard>
            <AddToCartIcon>
                <BsPlusSquareFill color="orange" fontSize={26}/>
            </AddToCartIcon>
            <div>
                <CardImage src={image}/>
            </div>
            <CardDetails>
                <CardTitle>{name}</CardTitle>
                <div>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi in sed sit veniam! A mollitia quasi quia sequi voluptates.</Description>
                    <Price>$ {Number.parseInt(price).toLocaleString("es-CO")}</Price>
                </div>

            </CardDetails>
        </SelfProductCard>

    )
}

export default ProductCard
