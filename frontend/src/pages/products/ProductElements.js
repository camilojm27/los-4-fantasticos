import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

export const ProductSection = styled.section `

`;

export const HeroProducts = styled.div `
  height: 300px;
  background-image: url('https://www.enter.co/wp-content/uploads/2017/02/menu-restaurant-vintage-tableFINAL.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const TitleHero = styled.h2 `
  color: white;
  margin-top: 20px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.27);
  padding: 5px;
`
export const SearchBar = styled.div `
  margin-bottom: auto;
  margin-top: auto;
  height: 50px;
  background-color: rgba(53, 59, 72, 0.8);
  border-radius: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input `
  color: white;
  border: 0;
  outline: 0;
  background: none;
  padding: 0 10px;
  width: 450px;
  caret-color: orange;
  line-height: 40px;
  transition: width 0.4s linear;
  font-size: 1.2rem;
`;

export const SearchIconP = styled(SearchIcon)`
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color:white;
  text-decoration:none;
`;


// Category

export const Li = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 0.25em 0.5em;
  margin: 10px;
  border-radius: 9px;
  color: #111111;

  &:hover {
    color: rgb(226, 8, 102);
  }

`;

export const Panel = styled.aside`
  height: 300px;
  width: 200px;
  overflow: auto;
  border: solid orange;
  border-radius: 9px;
  align-self: center;
  margin-left: 20px;
  `;
