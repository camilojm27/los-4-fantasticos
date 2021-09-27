import Tablas from './Tablas'
import React, {useEffect, useState} from 'react';
import {Container, WrapperTable} from '../Elements'
import {useDispatch, useSelector} from "react-redux";

import {
    Background,
    CloseModal,
    H1,
    Input,
    InputId,
    ModalInput,
    ModalInputId,
    Options,
    OptionsRemove,
    Title
} from '../Category/modalElements'
import {BtnEdit, BtnRemove, BtnSend} from '../Btn'
import styled from 'styled-components';
import {getCategory,getInvoice} from '../../../state/actions/categoryAction'

const Modal = styled.div`
  max-width: 900px;
  min-width: 700px;
  max-height: 600px;
  min-height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: absolute;
  z-index: 10;
  border-radius: 5px;
  -webkit-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);

`;

const Invoice = () => {
    const dispatch = useDispatch()
    const {user: currentUser} = useSelector((state) => state.auth);
    const listCategory = useSelector(state => state.categoryList)
    //const listInvoice = useSelector(state => state.invoiceList)

 
    useEffect(() => {
        dispatch(getCategory())
      //  dispatch(getInvoice())
    }, [dispatch])


    return (

        <Container>
           

            <WrapperTable>

                <Tablas  listCategory={listCategory}/>
            </WrapperTable>


        </Container>
    )
}

export default Invoice
