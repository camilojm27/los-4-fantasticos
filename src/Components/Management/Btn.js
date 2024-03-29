import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Btn = styled.button`
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

export const BtnRemove = styled.button`
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

export const BtnEdit = styled.button`
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
   margin-left: 10px;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #767676;
      color: #fff;
   }

`

export const BtnActivate = styled.button `
   border-radius: 5px;
   background: #2457F7;
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
   margin-left: 10px;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #033FF9;
      color: #fff;
   }

`

export const BtnSend = styled.button`
   border-radius: 5px;
   background: #388e3c;
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
   margin-right: 15px;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #306632;
      color: #fff;
   }

`