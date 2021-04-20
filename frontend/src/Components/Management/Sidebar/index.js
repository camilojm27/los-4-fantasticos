import React from 'react'
import { SidebarContainer, SidebarTitle, SidebarImg, Img, SidebarMenu, SidebarLink, I, ASidebar1,ASidebar2, H2Sidebar, HomeIcon, CategoryIcon, ProductIcon, InvoiceIcon, ClientIcon, AdminIcon,SidebarLogout,LogoutIcon} from './SidebarElements'

const Sidebar
    = () => {
        return (
            <SidebarContainer>


                <SidebarTitle>
                    <SidebarImg>
                        <Img src="https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_hzu1kc.png" alt="logo" />
                    </SidebarImg>
                </SidebarTitle>

                <SidebarMenu>
                    <SidebarLink>
                        <I><HomeIcon /></I>
                        <ASidebar1 to="/Management/">Administracion</ASidebar1>
                    </SidebarLink>
                    <H2Sidebar>Restaurante</H2Sidebar>
                    <SidebarLink>
                        <I><CategoryIcon /></I>
                        <ASidebar2>Categorias</ASidebar2>
                    </SidebarLink>
                    <SidebarLink>
                        <I><ProductIcon /></I>
                        <ASidebar2>Productos</ASidebar2>
                    </SidebarLink>
                    <SidebarLink>
                        <I><InvoiceIcon /></I>
                        <ASidebar2>Facturas</ASidebar2>
                    </SidebarLink>
                    <H2Sidebar>Usuarios</H2Sidebar>
                    <SidebarLink>
                        <I><ClientIcon /></I>
                        <ASidebar2>Clientes</ASidebar2>
                    </SidebarLink>
                    <SidebarLink>
                        <I><AdminIcon /></I>
                        <ASidebar2>Administradores</ASidebar2>
                    </SidebarLink>
                    <SidebarLogout>
                        <I><LogoutIcon/></I>
                        <ASidebar2> Cerrar sesion</ASidebar2>
                    </SidebarLogout>
               
               
                </SidebarMenu>
            </SidebarContainer >
        )
    }

export default Sidebar

