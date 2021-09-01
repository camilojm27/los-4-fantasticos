
import styled from 'styled-components';
import { MdClose} from 'react-icons/md';

import { FaUser,FaLock } from "react-icons/fa";
import { Link as LinkS} from 'react-scroll'
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:5; // si le colocamos 10, superpone al navbar, 5 para no superponerlo
  box-shadow: 10px 5px 5px black;
  @media screen and (max-width: 768px){
    height: 130%;
  }
`;

export const SignInWrapper = styled.div`
 max-width: 500rem;
 min-width: 350px;
 max-height: 600px;
 min-height: 500px;
 background: #fff;
 color: #000;

 position: absolute;
 z-index: 10;
 border-radius: 10px;
 -webkit-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
 -moz-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
 box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);

`;

export const CloseSignInButton = styled(MdClose)`
cursor: pointer;
position:relative;
top: -220px;
right: -150px;
width: 26px;
height: 26px;
padding: 0;
z-index: 11;
`;


export const Img = styled.img`
margin:auto;
display:block;
padding-top:20px;
width:150px;
  
 `

 export const H1SignIn = styled.h1`
   font-size: 1.5rem;
  color: #444;
  padding-top:50px;
  padding-left:110px;
  display:block;

 `

 export const IconUser = styled(FaUser)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:10px;
 margin-left:10px;
 margin-right:5px;
 padding-top:4px;
 `


export const IconPassword = styled(FaLock)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:10px;
 margin-left:10px;
 margin-right:10px;
 padding-top:4px;

`

export const SignInInput = styled.div`
 max-width: 240px;
  background-color: #f0f0f0;
  margin: 25px 55px;
  height: 50px;
  border-radius: 55px;


  
  position: relative;
`

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  width:170px;
`

export const I = styled.i`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
`

export const BtnLogin = styled.button`
   border-radius: 50px;
   background: rgb(235, 232, 51);
   white-space: nowrap;
   padding: 10px 40px;
   margin-left:105px;
   color: #010606;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;

   &:hover{
      transition: all 0.2s ease-in-out;
      background: #f0f0f0;
      color: #333;
   }

`

export const H2SignIn = styled.h2`
   padding-top:10px;
   margin-left:80px;
   font-size:0.9rem;
   display:block;

`

export const ASignIn = styled(LinkS)`

text-decoration:none;
cursor:pointer;
color:rgb(201, 198, 56);
&:hover{
    
      color: #555;
    
   }

   
`
export const Error = styled.h2`
 font-size: 1.2rem;
 text-align: center;

 margin-bottom: 5px;
`
