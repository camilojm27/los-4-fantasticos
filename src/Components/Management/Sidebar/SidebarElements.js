import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {RiFileListLine, RiProductHuntLine} from 'react-icons/ri'
import {FiUser, FiUserPlus} from 'react-icons/fi'
import {FaPowerOff} from 'react-icons/fa'

export const SidebarContainer = styled.div`
background: #020509;
grid-area:sidebar;
padding:30px;
-webkit-transition: all 0.5s; //por si luego lo hago responsive
transition: all 0.5s;


`
export const HomeIcon = styled(IoHome)`
margin-left:-20px;
margin-right:10px;

`
export const CategoryIcon = styled(HiOutlineClipboardList)``
export const ProductIcon = styled(RiProductHuntLine)``
export const InvoiceIcon = styled(RiFileListLine)``
export const ClientIcon = styled(FiUser)``
export const AdminIcon = styled(FiUserPlus)``
export const LogoutIcon = styled(FaPowerOff)``

export const SidebarTitle = styled.div`
display:flex;
justify-content: space-between;
color: #f3f4f6;
margin-bottom:30px;
`


export const SidebarImg = styled.div`
display:flex;
align-items:center;
padding-bottom:10px;
`


export const Img = styled.img`
margin-left:-10px;
object-fit:contain;
width:250px;
`


export const SidebarMenu = styled.div`


`


export const I = styled.i`
  font-size: 18px;
  margin-left:20px;
`


export const ASidebar1 = styled(LinkR)`
 text-decoration: none;
  color: #ddd;
  font-weight: 800;
  font-family: 'RocknRoll One', sans-serif;

  font-size:20px;
`


export const ASidebar2 = styled(LinkR)`
 text-decoration: none;
  color: #ddd;
  font-weight: 700;
  font-family: 'RocknRoll One', sans-serif;
  margin-left:10px;
`


export const SidebarLink = styled.div`
  color: #f3f4f6;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 5px;


  &:active{

  }
  
  
  `


export const H2Sidebar = styled.h2`
 color: rgb(235, 232, 51);
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
  font-family: 'RocknRoll One', sans-serif;
`

export const SidebarLogout = styled.div`
  margin-top:50px;
  padding:10px;
  color: #e65061;
`
