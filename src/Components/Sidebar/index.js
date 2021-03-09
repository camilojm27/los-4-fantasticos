import React from 'react'
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

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink onClick={toggle} to="/Productos">
                      Productos
                  </SidebarLink>
                  <SidebarLink onClick={toggle} to="/Nosotros">
                      Quienes somos
                  </SidebarLink>
                  <SidebarLink onClick={toggle} to="/Registro">
                      Registrate
                  </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/signin">
                      Iniciar Sesion
                  </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
