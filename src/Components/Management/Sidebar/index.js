import {
    AdminIcon,
    ASidebar1,
    ASidebar2,
    CategoryIcon,
    ClientIcon,
    H2Sidebar,
    HomeIcon,
    I,
    InvoiceIcon,
    LogoutIcon,
    ProductIcon,
    SidebarContainer,
    SidebarLink,
    SidebarLogout,
    SidebarMenu,
    PromotionIcon,
    Avenues
} from './SidebarElements'
import './active.css'
import React from 'react'
import {useDispatch} from "react-redux";
import {logout} from "../../../state/actions/authAction"

const Sidebar
    = () => {


    const dispatch = useDispatch();
    const logOut = () => {

        dispatch(logout());

    };


    return (

        <SidebarContainer>

            {/*<SidebarTitle>*/}
            {/*    <SidebarImg>*/}
            {/*        <Img src="https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_hzu1kc.png" alt="logo" />*/}
            {/*    </SidebarImg>*/}
            {/*</SidebarTitle>*/}

            <SidebarMenu>
                <SidebarLink>

                    <div
                        id={window.location.pathname === '/Management/' || window.location.pathname === '/Management' ? "active" : ""}>
                        <I><HomeIcon/></I><ASidebar1 to="/Management/">Administracion</ASidebar1></div>
                </SidebarLink>
                <H2Sidebar>Restaurante</H2Sidebar>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Categories' || window.location.pathname === '/Management/Categories/Edit' ? "active" : ""}>
                        <I><CategoryIcon/></I>
                        <ASidebar2 to="Categories">Categorias</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/ProductAllScreen' || window.location.pathname === '/Management/ProductAllScreen/Edit' ? "active" : ""}>
                        <I><ProductIcon/></I>
                        <ASidebar2 to="ProductAllScreen">Productos</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Invoices' || window.location.pathname === '/Management/Invoices/Edit' ? "active" : ""}>
                        <I><InvoiceIcon/></I>
                        <ASidebar2 to="Invoices">Facturas</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Promotions' || window.location.pathname === '/Management/Invoices/Edit' ? "active" : ""}>
                        <I><PromotionIcon/></I>
                        <ASidebar2 to="Promotions">Descuentos</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Avenues' || window.location.pathname === '/Management/Avenues/Edit' ? "active" : ""}>
                        <I><Avenues/></I>
                        <ASidebar2 to="Avenues">Sedes</ASidebar2>
                    </div>
                </SidebarLink>
                <H2Sidebar>Usuarios</H2Sidebar>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Clients' || window.location.pathname === '/Management/Clients/Edit' ? "active" : ""}>
                        <I><ClientIcon/></I>
                        <ASidebar2 to="Clients">Clientes</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLink>
                    <div
                        id={window.location.pathname === '/Management/Admins' || window.location.pathname === '/Management/Admins/Edit' ? "active" : ""}>
                        <I><AdminIcon/></I>
                        <ASidebar2 to="Admins">Administradores</ASidebar2>
                    </div>
                </SidebarLink>
                <SidebarLogout>
                    <I><LogoutIcon/></I>
                    <ASidebar2 onClick={logOut}> Cerrar sesion</ASidebar2>
                </SidebarLogout>


            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar

