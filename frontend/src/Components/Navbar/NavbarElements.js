import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

//LinkR es por Link Router, y Link s es por Link Scroll
export const Nav = styled.nav`
   background: ${({scrollNav}) => (scrollNav ? '#111' : 'transparent')};
   height:80px;
   margin-top: -80px; 
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   transition: 0.8s all ease;


   


`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px ;
   
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;

`;

export const NavLogo = styled(LinkR)`

    
    cursor: pointer;
  
    display: flex;
    align-items: center;




   
    


`;

export const MobileIcon = styled.div `
  display:none;

  @media screen and (max-width: 768px){
     display:block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color: #fff;
  }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style:none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 768px){
      display:none;

   }
`;

export const NavItem = styled.li`
  height: 80px;
  

`

export const NavLinks = styled(LinkS)`
   color: #fff;
   display: flex;
   align-items:center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-family: 'RocknRoll One', sans-serif;
   font-size: 15px;

   /* Esto es pa cuando uno selecciona un item, la rayita */

   &.active {
      border-bottom: 3px solid rgb(235, 232, 51);
   }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
     display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
   border-radius: 50px;
   background: rgb(235, 232, 51);
   white-space: nowrap;
   padding: 7px 22px;
   color: #010606;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;

   &:hover{
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
   }



`