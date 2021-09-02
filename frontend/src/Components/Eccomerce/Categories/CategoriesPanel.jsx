import styled from "styled-components";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

const Li = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 0.25em 0.5em;
  margin: 10px;
  border-radius: 9px;

  &:hover {
    color: rgb(226, 8, 102);
  }

`;

const Panel = styled.aside`
  height: 300px;
  width: 200px;
  overflow: auto;
  border: solid orange;
  border-radius: 9px;
  align-self: center;
  margin-left: 20px;
  `;

const CategoriesPanel = (props) => {
    let [categories, setCategories] = useState([])
    useEffect(() => {
        Axios.get('https://ricuritas.herokuapp.com/api/category').then((res) => {
            let data = res.data.categories

            setCategories(data)
        })
    }, [])

    return (
        <Panel>
            <ul>
                <Link to='/products'>
                    <Li className={props.categoriesID === '' ? 'tabs-active' : ''}>Todas</Li>
                </Link>
                {
                    categories.map((cat) =>
                        <Link key={cat.id} to={`/products/${cat.id}`}>
                            <Li className={props.categoriesID === cat.id.toString() ? 'tabs-active' : ''}>{cat.name}</Li>
                        </Link>
                    )
                }
            </ul>
        </Panel>
    )
}
export default CategoriesPanel
