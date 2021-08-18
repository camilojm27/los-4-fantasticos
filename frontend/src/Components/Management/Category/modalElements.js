import styled from 'styled-components'
import { MdClose} from 'react-icons/md';
export const Background = styled.div`
  width: 80%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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



export const CloseModal = styled(MdClose)`
cursor: pointer;
position:relative;
top:10px;
right: -665px;
width: 26px;
height: 26px;
padding: 0;
z-index: 11;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  width:570px;
  margin-top: 15px;
  margin-left: 10px;
`

export const InputId = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  width:80px;
  margin-top: 15px;
  margin-left: 10px;
`
export const ModalInput = styled.div`
 max-width: 640px;
  background-color: #f0f0f0;
  margin: 25px 55px;
  height: 50px;
  border-radius: 5px;


  
  position: relative;
`
export const ModalInputId = styled.div`
 max-width: 100px;
  background-color: #f0f0f0;
  margin: 25px 55px;
  height: 50px;
  border-radius: 5px;


  
  position: relative;
`

export const Options = styled.div`
margin-left: 430px;
`
export const OptionsRemove = styled.div`
margin-left: 250px;
`

export const H1 = styled.h1`
font-size: 24px;
font-family: 'RocknRoll One', sans-serif;
`

export const Title = styled.div`
  margin-left: 60px;
  margin-top: 50px;
  margin-bottom: 40px;
`