import React, {useState,useEffect} from 'react';
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
import {animateScroll as scroll} from 'react-scroll';
import { FaBars } from 'react-icons/fa';

//NavElements es basicamente para las partes del navbar, asi se modula un poco mas

//En img src logo, aun no se como ajustar el tamño de la imagen real, por lo que de momento
//Dejo una imagen .ico, el problema es que se ve de mala calidad en celular y cosas asi, creo
const Navbar = ({ toggle }) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav); 
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav }>
                <NavbarContainer>
                
                        <NavLogo to="/" onClick={toggleHome}>
                            <img to="/" src='https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_v81kkw.ico' alt="" />
                        </NavLogo>
                

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem> 
                            <NavLinks 
                            to="Nosotros"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Quienes somos</NavLinks>
                        </NavItem>

                        <NavItem> 
                            <NavLinks 
                            to="Productos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Productos</NavLinks>
                        </NavItem>


                        <NavItem>
                            <NavLinks to="Registro"
                            >Registrate</NavLinks>
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
