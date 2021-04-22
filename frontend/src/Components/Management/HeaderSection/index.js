import React,{useState} from 'react'
import {HeaderContainer,HeaderWrapper,HeaderMessage,HeaderTitle,Img,H1Header,PHeader} from './HeaderSectionElements'
function HeaderSection() {
      
    const[Page,SetPage] = useState()

    
    return (
        <HeaderContainer>
            <HeaderWrapper>

            <HeaderMessage>

          
            <HeaderTitle>
                <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg"/>
                <H1Header>
                   Hola username
                   <PHeader>
                    Bienvenido al panel de administracion {Page}
                </PHeader>
                </H1Header>
                
                
            </HeaderTitle>
            </HeaderMessage>


            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default HeaderSection
