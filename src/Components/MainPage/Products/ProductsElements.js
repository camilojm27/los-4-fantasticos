import styled from 'styled-components'
import {Link} from "react-router-dom";

export const ProductsContainer = styled.div`
   height: 100vh;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #EEEEED;
   

   @media screen and (max-width: 860px){
       height: 1100px;
   }

   @media screen and (max-width: 480px){
       height: 1620px;
   }

   @media screen and (max-width: 350px){
       height: 1720px;
   }
`

export const ProductsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-templatecolumns: 1fr 1fr;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }
`

export const ProductsCard = styled.div`
  background: #EEEEED;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  max-height: 500px;
  padding: 30px 30px 50px 30px;
  box-shadow: 5px 5px 4px rgba(5, 5, 5, 0.2);

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    @media screen and (max-width: 860px) {
      padding: 0px 30px 30px 30px;
      height: 380px;
    }


  }
`


export const ProductsImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`


export const ProductsH1 = styled.h1`
  font-size: 2.5rem;
  color: #111;
  margin-bottom: 64px;
  font-family: 'RocknRoll One', sans-serif;
  

  @media screen and (max-width: 480px){
      font-size: 2rem;
      padding-left:20px;
      padding-top:200px;
  }


  `

export const ProductsH2 = styled.h2`
   font-size: 1.1rem;
   margin-bottom: 10px;
   font-family: 'RocknRoll One', sans-serif;
   color:#000;
`

export const ProductsP = styled.p`
  font-size: 1.1rem;
  text-align: center;
  font-family: 'RocknRoll One', sans-serif;
  color:#000;
`
export const ButtonL = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? 'rgb(201, 198, 56)' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  grid-column: 1/4;
  width: 100%;
  margin: auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : 'rgb(201, 198, 56)')};
  }
`;
