import styled from 'styled-components';

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
  height: 130px;
  border: 1px solid gray;
  border-radius: 9px;
  cursor: pointer;
  padding: 12px;
`
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Price = styled.p `

`;
const Description = styled.p `

`;



const ProductCard = ({image, name, price, description}) => {


    return (
        <SelfProductCard>
            <div>
                <CardImage src={image}/>
            </div>
            <CardDetails>
                <CardTitle>{name}</CardTitle>
                <div>
                    <Price>$ {price.toLocaleString("es-CO")}</Price>
                    <Description>{description}</Description>
                </div>

            </CardDetails>
        </SelfProductCard>

    )
}

export default ProductCard
