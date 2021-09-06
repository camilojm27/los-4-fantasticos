import React from 'react';
import {Container} from '../Elements'
import {H1Header, HeaderMessage, HeaderTitle, Img, PHeader} from '../HeaderSection/HeaderSectionElements'

export function ClientsManagement() {

    return (

        <Container>

            <HeaderMessage>


                <HeaderTitle>
                    <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg"/>
                    <H1Header>
                        Hola {currentUser === null ? "user" : currentUser.user.name}
                        <PHeader>
                            Bienvenido al panel de usuarios
                        </PHeader>
                    </H1Header>


                </HeaderTitle>
            </HeaderMessage>


        </Container>
    )
}

