import styled from 'styled-components';

const CardTitle = styled.h2`
   color: black;
  font-size: 18px;
  font-weight: bold;
`

const CardImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  transition: all 300ms ease-in-out;
  &:hover{
    max-width: 150px;
    max-height: 150px;
  }
`
const SelfProductCard = styled.figure`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  text-align: center;
  background-color: rgb(226, 222, 8);

  cursor: pointer;
  padding: 12px;
`
const CardDetails = styled.div`
  display: flex;
flex-direction: column;
  justify-content: space-between;
`


const ProductCard = ({image, name, price}) => {


    return (
        <SelfProductCard>
            <CardImage src={image} />
            <CardDetails>
            <CardTitle>{name}</CardTitle>
            <p>{price}</p>
            </CardDetails>
        </SelfProductCard>

    )
}

export default ProductCard
