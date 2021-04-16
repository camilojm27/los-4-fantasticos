import React, {useState,useEffect} from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'
import SignInModal from '../SignInModal'

const Sidebar = ({ isOpen, toggle }) => {

    
    const [showSignIn,setShowSignIn] = useState(false)

    const openSignIn = () => {
        setShowSignIn (prev => !prev)
    }


    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="Nosotros"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Quienes somos
                  </SidebarLink>
                    <SidebarLink onClick={toggle}
                        to="Productos"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Productos
                  </SidebarLink>

                    <SidebarLink onClick={toggle} to="Registro">
                        Registrate
                  </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={openSignIn}>
                        Iniciar Sesion
                  </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
        
   <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
        </>
        
    )
}

export default Sidebar;
