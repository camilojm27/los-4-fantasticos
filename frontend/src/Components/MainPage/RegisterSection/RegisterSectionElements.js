import styled from 'styled-components'
import { FaUser,FaLock,FaMapMarkerAlt,FaRegCalendarAlt } from "react-icons/fa";


import {FiMail} from 'react-icons/fi'

import {HiOutlineIdentification,HiPhone} from 'react-icons/hi'



export const RegisterContainer = styled.div`
height: 92vh;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #fff;
   -webkit-justify-content: normal;
   padding-top:100px;
 
  

   `

export const RegisterWrapper = styled.div``

export const RegisterImg = styled.div`

`

export const RegisterForm = styled.div``

export const H2Form = styled.h2`
  font-family: 'RocknRoll One', sans-serif;
  text-align:center;
  padding-bottom:50px;
`

export const RegisterInput = styled.div`
 max-width: 250px;
  background-color: #f0f0f0;
  margin: 15px 10px;
  height: 50px;
  border-radius: 55px;

  width:230px;

  
  @media screen and (max-width: 530px){

   width:150px;

}

@media screen and (max-width: 345px){

width:135px;

}


  
`

export const Input = styled.input`
   background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #666;
  width:180px;
  margin-left:5px;
  cursor:text;
  background:none;

  @media screen and (max-width: 530px){

    font-size: 0.5rem;
    width:95px;

}

@media screen and (max-width: 345px){

font-size: 0.45rem;
width:85px;

}

`





export const RegisterGridInput = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  
`

export const RegisterInputBlock = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-column:1/3;
  background-color: #f0f0f0;
  margin: 15px 10px;
  height: 50px;
  width:480px;
  border-radius: 55px;
  position: relative;

  @media screen and (max-width: 530px){


width:320px;
}

@media screen and (max-width: 345px){


width:290px;
}
  
  
`


export const I = styled.i`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
`


export const BtnRegister = styled.button`
   border-radius: 50px;
   background: rgb(235, 232, 51);
   white-space: nowrap;
   padding: 10px 40px;
   margin:auto;
   color: #010606;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;
   display:block;

   &:hover{
      transition: all 0.2s ease-in-out;
      background: #f0f0f0;
      color: #333;
   }

`



export const InputBlock = styled.input`

   background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #666;
  width:430px;
  margin-left:5px;
  cursor:text;
  background:none;

  @media screen and (max-width: 530px){

    font-size: 0.5rem;
    width:275px;

}

@media screen and (max-width: 345px){

font-size: 0.45rem;
width:85px;

}


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

 padding-top:4px;

`

export const IconEmail = styled(FiMail)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:12px;
 margin-left:10px;

 padding-top:4px;

`

export const IconMap = styled(FaMapMarkerAlt)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:10px;
 margin-left:10px;

 padding-top:4px;

`
export const IconCalendar = styled(FaRegCalendarAlt)`
width: 0px;
height: 0px; 

 margin-left:10px;



`

export const IconId = styled(HiOutlineIdentification)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:10px;
 margin-left:10px;

 padding-top:4px;

`
export const IconPhone = styled(HiPhone)`
width: 24px;
height: 24px; 
line-height: 55px;
 color: #acacac;
 margin-top:10px;
 margin-left:10px;

 padding-top:4px;

`