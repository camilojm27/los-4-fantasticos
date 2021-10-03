import React from 'react'
import styled from 'styled-components';
import {BsPlusSquareFill} from 'react-icons/bs'
import {useDispatch} from "react-redux";
import {addToCart} from "../../../state/actions/cartActions";
import {Alert} from "@material-ui/lab";
import {Snackbar} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const AddToCartIcon = styled.div`
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

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const Description = styled.p`

`;


const ProductCard = ({image, name, price, description, id}) => {

    let history = useHistory();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
        dispatch(addToCart(id, 1))
        history.push('/cart')
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <SelfProductCard>
            <AddToCartIcon>
                <BsPlusSquareFill color="orange" fontSize={26} onClick={handleClick}/>
            </AddToCartIcon>
            <div>
                <CardImage src={image}/>
            </div>
            <CardDetails>
                <CardTitle>{name}</CardTitle>
                <div>
                    <Description>{description}</Description>
                    <Price>$ {Number.parseInt(price).toLocaleString("es-CO")}</Price>
                </div>

            </CardDetails>

            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {name} agregado correctamente
                </Alert>
            </Snackbar>
        </SelfProductCard>

    )
}

export default ProductCard
