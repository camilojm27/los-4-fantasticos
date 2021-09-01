import React from 'react'
import {HeaderContainer,HeaderWrapper,HeaderMessage,HeaderTitle,Img,H1Header,PHeader} from './HeaderSectionElements'
import { useSelector } from "react-redux";
function HeaderSection() {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <HeaderContainer>
            <HeaderWrapper>

            <HeaderMessage>


            <HeaderTitle>
                <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg"/>
                <H1Header>
                   Hola {currentUser === null ? "user" : currentUser.user.name }
                   <PHeader>
                    Bienvenido al panel de administracion
                </PHeader>
                </H1Header>


            </HeaderTitle>
            </HeaderMessage>


            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default HeaderSection
