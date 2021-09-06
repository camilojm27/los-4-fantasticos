import React from 'react'
import {
    H1Header,
    HeaderContainer,
    HeaderMessage,
    HeaderTitle,
    HeaderWrapper,
    Img,
    PHeader
} from './HeaderSectionElements'
import {useSelector} from "react-redux";

import {BtnEdit} from '../Btn';

function HeaderSection() {

    const {user: currentUser} = useSelector((state) => state.auth);

    return (
        <HeaderContainer>
            <HeaderWrapper>

                <HeaderMessage>


                    <HeaderTitle>
                        <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg"/>
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

                    <BtnEdit>Top 20 productos mas vendidos</BtnEdit>
                    <BtnEdit>Top 20 Productos menos vendidos</BtnEdit>
                    <BtnEdit>Sede de restaurante con mas ventas</BtnEdit>
                    <BtnEdit>Sede de restaurante con menos ventas</BtnEdit>
                    <BtnEdit>Cumpleaños el proximo mes</BtnEdit>

                    <HeaderTitle>


                    </HeaderTitle>
                </HeaderMessage>

            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default HeaderSection
