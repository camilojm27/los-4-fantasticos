import React from 'react'
import { SidebarContainer, SidebarTitle, SidebarImg, Img, SidebarMenu, SidebarLink, I, ASidebar1,ASidebar2, H2Sidebar, HomeIcon, CategoryIcon, ProductIcon, InvoiceIcon, ClientIcon, AdminIcon,SidebarLogout,LogoutIcon} from './SidebarElements'
import './active.css'


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
                        

                        <div id={window.location.pathname === '/Management/' || window.location.pathname === '/Management' ? "active":""}><I><HomeIcon /></I><ASidebar1 to="/Management/">Administracion</ASidebar1></div>
                    </SidebarLink>
                    <H2Sidebar>Restaurante</H2Sidebar>
                    <SidebarLink>
                    <div id={window.location.pathname === '/Management/Categories' || window.location.pathname === '/Management/Categories/Edit' ? "active":""}>
                        <I><CategoryIcon /></I>
                        <ASidebar2 to="Categories">Categorias</ASidebar2>
                        </div>
                    </SidebarLink>
                    <SidebarLink>
                    <div id={window.location.pathname === '/Management/Products' || window.location.pathname === '/Management/Products/Edit' ? "active":""}>
                        <I><ProductIcon /></I>
                        <ASidebar2 to="Products">Productos</ASidebar2>
                        </div>
                    </SidebarLink>
                    <SidebarLink>
                    <div id={window.location.pathname === '/Management/Invoices' || window.location.pathname === '/Management/Invoices/Edit' ? "active":""}>
                        <I><InvoiceIcon /></I>
                        <ASidebar2 to="Invoice">Facturas</ASidebar2>
                        </div>
                    </SidebarLink>
                    <H2Sidebar>Usuarios</H2Sidebar>
                    <SidebarLink>
                    <div id={window.location.pathname === '/Management/Clients' || window.location.pathname === '/Management/Clients/Edit' ? "active":""}>
                        <I><ClientIcon /></I>
                        <ASidebar2 to="Clients">Clientes</ASidebar2>
                        </div>
                    </SidebarLink>
                    <SidebarLink>
                    <div id={window.location.pathname === '/Management/Admins' || window.location.pathname === '/Management/Admins/Edit'  ? "active":""}>
                        <I><AdminIcon /></I>
                        <ASidebar2 to="Admins">Administradores</ASidebar2>
                        </div>
                    </SidebarLink>
                    <SidebarLogout>
                        <I><LogoutIcon/></I>
                        <ASidebar2 to="/"> Cerrar sesion</ASidebar2>
                    </SidebarLogout>
               
               
                </SidebarMenu>
            </SidebarContainer >
        )
    }

export default Sidebar

