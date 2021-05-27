
import Tablas from './Tablas'
import React from 'react';
import {Container, WrapperTable } from '../Elements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
import { useSelector } from "react-redux";

const Category = () => {

  const { user: currentUser } = useSelector((state) => state.auth);


  return (
    <Container>
      <HeaderMessage>


        <HeaderTitle >
          <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
          <H1Header>
            Hola {currentUser === null ? "user" : currentUser.user.name }
       <PHeader>
              Bienvenido al panel de las Categorias
            </PHeader>
          </H1Header>


        </HeaderTitle>
      </HeaderMessage>

      <WrapperTable>
        <Tablas/>
      </WrapperTable>


    </Container>
  )
}

export default Category
