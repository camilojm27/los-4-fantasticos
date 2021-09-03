
import Tablas from './Tablas'
import React, { useState, useEffect } from 'react';
import { Container, WrapperTable } from '../Elements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
import { useDispatch, useSelector } from "react-redux";

import { Background, CloseModal, Input, ModalInput, ModalInputId, InputId, Options, OptionsRemove, H1, Title } from '../Category/modalElements'
import { BtnRemove, BtnSend, BtnEdit } from '../Btn'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { addCategory, getCategory, editCategory, deleteCategory } from '../../../state/actions/categoryAction'


    return (

        <Container>

            <HeaderMessage>


                <HeaderTitle >
                    <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
                    <H1Header>
                        Hola {currentUser === null ? "user" : currentUser.user.name}
                        <PHeader>
                            Bienvenido al panel de las Categorias
                        </PHeader>
                    </H1Header>


                </HeaderTitle>
            </HeaderMessage>



        </Container>
    )
}

export default Category
