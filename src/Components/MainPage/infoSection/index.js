import React from 'react'
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './infoElements'
import {Button} from '../ButtonElement'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id='Nosotros'>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Restaurante caleño</TopLine>
                                <Heading>¿Que encontraras en nuestro restaurante?</Heading>
                                <Subtitle>Aqui encontraras gran variedad de productos, desde comidas rapidas como
                                    hamburguesa, pizza, hotdogs, hasta helados de muchos tipos. Ademas de una gran
                                    variedad de platos saciantes para tu paladar</Subtitle>
                                <BtnWrap>
                                    <Button to="Register"

                                            primary='true'
                                            dark='true'
                                            smooth={true}
                                            duration={1000}
                                            spy={true}
                                            exact='true'
                                            offset={-80}

                                    >Unite ya!</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img
                                    src='https://res.cloudinary.com/kentruri/image/upload/v1615394068/Serving-Food-PNG-Image-HD_ysbgfu.png'
                                    alt="Plato de comida"/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
