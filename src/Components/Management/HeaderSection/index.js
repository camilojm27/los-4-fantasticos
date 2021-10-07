import React from 'react'
import {
    H1Header,
    H2Header,
    HeaderContainer,
    HeaderMessage,
    HeaderTitle,
    HeaderWrapper,
    Img,
    PHeader
} from './HeaderSectionElements'
import { useSelector } from "react-redux";


import styled from 'styled-components';

const RegisterGridInput = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  
`

const RegisterInput = styled.div`
  max-width: 250px;
  background-color: #ddd;
  margin:50px 0px;
  height: 50px;
  border-radius: 55px;

  width:230px;
  
  @media screen and (max-width: 530px){

   width:150px;

}

@media screen and (max-width: 345px){

width:135px;

}


  
`

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #666;

  margin-top: 15px;
  margin-left: 15px;
  cursor: text;
  background: none;
`
const InputProduct = styled.input`
background: #fff;
outline: none;
border: #ddd;
border-radius: 3px;
border-color: #ddd;
line-height: 1;
font-weight: 600;
font-size: 1rem;
color: #666;
width:230px;
height: 50px;
margin-top: 50px;
margin-bottom: 50px;


`



const Btn = styled.button`
   border-radius: 5px;
   background: #A7A7A7;
   white-space: nowrap;
   padding: 12px 20px;
   color: #fff;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;
   margin-right: 10px;
   margin-bottom: -100px;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #767676;
      color: #fff;
   }

`

function HeaderSection() {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <HeaderContainer>
            <HeaderWrapper>

                <HeaderMessage>


                    <HeaderTitle>
                        <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
                        <H1Header>
                            Hola {currentUser === null ? "user" : currentUser.user.name}
                            <PHeader>
                                Bienvenido al panel de administracion
                            </PHeader>

                        </H1Header>


                    </HeaderTitle>
                </HeaderMessage>

                <HeaderMessage>
                    <H1Header>
                        Generar
                    </H1Header>

                    <Btn>Top 20 productos mas vendidos</Btn>
                    
                    <Btn>Top 20 Productos menos vendidos</Btn>
                    <Btn>Sede de restaurante con mas ventas</Btn>
                    <Btn>Sede de restaurante con menos ventas</Btn>
                    <Btn>Cumpleaños el proximo mes</Btn>

                    <HeaderTitle>

                 
                    </HeaderTitle>
                </HeaderMessage>

                <HeaderMessage>
                    <H1Header>
                        Generar reporte del producto
                    </H1Header>

                    <Btn>Numero de ventas del producto</Btn>

                    <InputProduct placeholder="id del producto" />

                    <HeaderTitle>


                    </HeaderTitle>
                </HeaderMessage>

                <HeaderMessage>
                    <H1Header style={{ margin: "-60px 0px 10px 0px" }}>
                        Reporte de
                    </H1Header>
                    <Btn>Ventas por fecha</Btn>
                    <form>
                        <RegisterGridInput>
                            <H2Header>Fecha inicial</H2Header>
                            <RegisterInput>

                                <Input type="date" />
                            </RegisterInput>

                            <H2Header>Fecha final</H2Header>

                            <RegisterInput>

                                <Input type="date" />
                            </RegisterInput>
                        </RegisterGridInput>
                    </form>
                    <HeaderTitle>


                    </HeaderTitle>
                </HeaderMessage>




            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default HeaderSection
