import React from 'react';
import {
Nav,
NavbarContainer,
NavLogo,
MobileIcon,
NavMenu,
NavItem,
NavLinks,
NavBtn,
NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

//NavElements es basicamente para las partes del navbar, asi se modula un poco mas

//En img src logo, aun no se como ajustar el tamño de la imagen real, por lo que de momento
//Dejo una imagen .ico, el problema es que se ve de mala calidad en celular y cosas asi, creo
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src='https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_v81kkw.ico' />   
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="Productos">Productos</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="Nosotros">Quienes somos</NavLinks>
                        </NavItem>          
                                     
                         <NavItem>
                             <NavLinks to ="Registro">Registrate</NavLinks>
                         </NavItem>
                        
                     </NavMenu> 
                     <NavBtn>
                             <NavBtnLink to="/signin">
                                 Iniciar Sesion
                             </NavBtnLink>
                         </NavBtn>
                </NavbarContainer>

            </Nav>
        </>
    )
}


export default Navbar
