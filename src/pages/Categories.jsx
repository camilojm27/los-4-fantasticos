import styled from "styled-components";
import ProductsList from "../Components/Products/ProductList";
import CategoriesPanel from "../Components/Categories/CategoriesPanel";

const SectionCategories = styled.section`
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;



const Categories = (props) => {

    const categoriesID = props.match.params.id

    return(
        <SectionCategories >
            <CategoriesPanel categoriesID={categoriesID}/>
            <ProductsList categoriesID={categoriesID} />
        </SectionCategories>

    )
}

export default Categories
