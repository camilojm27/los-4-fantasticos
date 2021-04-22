import React, { useEffect, useState } from 'react';
import Tablas from './Tablas'
import { CategoryContainer, CategoryWrapperTable } from './CategoryElements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
const Category = () => {


  return (
    <CategoryContainer>
      <HeaderMessage>


        <HeaderTitle >
          <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
          <H1Header>
            Hola username
       <PHeader>
              Bienvenido al panel de las Categorias
            </PHeader>
          </H1Header>


        </HeaderTitle>
      </HeaderMessage>

      <CategoryWrapperTable>
        <Tablas/>
      </CategoryWrapperTable>


    </CategoryContainer>
  )
}

export default Category
