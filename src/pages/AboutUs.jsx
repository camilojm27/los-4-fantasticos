import React from 'react'
import styled from "styled-components"
import PrimaryAppBar from "../Components/Eccomerce/PrimaryAppBar";

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    grid-gap: 10px;
    width: 80%;
    margin: 20px auto;
    background-color: gainsboro;
    
  @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
  }
`;

const Div = styled.div`
  align-self: center;
  letter-spacing: 1px;
`

const H1 = styled.h1 `
    margin-bottom: 20px;
`;

export default function SobreNosotros() {
    return (
        <>
            <PrimaryAppBar/>
            <Section>
            <Div>
                <H1>Sobre nosotros</H1>
                <p>Ricuritas es un restaurante con tradición en la ciudad de cali con 20 años de
                    experiencia llenando de sabor a los caleños, reconocido por su
                    buen sabor y el pollo mas crujiente de la ciudad.
                </p>
            </Div>
            <img height={400} width={500} src="https://images.pexels.com/photos/5865147/pexels-photo-5865147.jpeg?crop=entropy&cs=srgb&dl=pexels-rachel-claire-5865147.jpg&fit=crop&fm=jpg&h=426&w=640" alt=""/>
            <img height={400} width={500} src="https://images.pexels.com/photos/5865071/pexels-photo-5865071.jpeg?crop=entropy&cs=srgb&dl=pexels-rachel-claire-5865071.jpg&fit=crop&fm=jpg&h=426&w=640" alt=""/>
            <Div>
                <H1>Sobre nosotros</H1>
                <p>Nuestros restaurantes se caracterizan tener un ambiente ameno, con un concepto de diseño
                industrial, dando asi una experiencia en varios aspectos ya que no solo gozas de una excelente comida
                sino también una salida de lo cotidiano</p>
            </Div>

        </Section>
        </>

    )
}
