import React from 'react'

import {
    ProductsContainer,
    ProductsH1,
    ProductsWrapper,
    ProductsCard,
    ProductsImage,
    ProductsH2,
    ProductsP
} from './ProductsElements'
const ProductsSection = () => {
    return (
        <ProductsContainer id='Productos'>
            <ProductsH1>Algunos de nuestros productos</ProductsH1>
            <ProductsWrapper>
              
              <ProductsCard>
                  <ProductsImage src={'https://res.cloudinary.com/kentruri/image/upload/v1615487760/primera_lfo4ae.png'} />
                  <ProductsH2>Comidas rapidas</ProductsH2>
                  <ProductsP>Hamburguesas,perros calientes,pizza y muchos adictivos </ProductsP>
              </ProductsCard>

              <ProductsCard>
                  <ProductsImage src={'https://res.cloudinary.com/kentruri/image/upload/v1615487996/tercera_jfp0fe.png'} />
                  <ProductsH2>Malteadas y helados</ProductsH2>
                  <ProductsP>Gran variedad de sabores para que te quites ese antojo</ProductsP>
              </ProductsCard>

              <ProductsCard>
                  <ProductsImage src={'https://res.cloudinary.com/kentruri/image/upload/v1615487844/segunda_lbxf9e.png'} />
                  <ProductsH2>Platos tipicos y normales</ProductsH2>
                  <ProductsP>Distintos tipos de carnes con gran variedad de preparaciones</ProductsP>
              </ProductsCard>

            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductsSection
