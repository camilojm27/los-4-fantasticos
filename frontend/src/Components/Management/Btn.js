import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Btn = styled(LinkR)`
   border-radius: 10px;
   background: rgb(235, 232, 51);
   white-space: nowrap;
   padding: 12px 20px;
   color: #000;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: rgb(235, 220, 51);
      color: #aaa;
   }



`

export const WrapperBtn = styled.div`

 padding-top:50px;
`

export const BtnEdit = styled(LinkR)`
   border-radius: 5px;
   background: #D63434;
   white-space: nowrap;
   padding: 12px 20px;
   color: #eee;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #A02C2C;
      color: #fff;

   }
`

export const BtnRemove = styled(LinkR)`
   border-radius: 5px;
   background: #A7A7A7;
   white-space: nowrap;
   padding: 12px 20px;
   color: #fff;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #767676;
      color: #fff;
   }

`