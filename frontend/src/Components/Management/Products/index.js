import React from 'react';
import Tablas from './Tablas'
import {Container, WrapperTable } from '../Elements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
const Product = () => {


  return (
    <Container>
      <HeaderMessage>


        <HeaderTitle >
          <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
          <H1Header>
            Hola username
       <PHeader>
              Bienvenido al panel de los productos
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

export default Product
