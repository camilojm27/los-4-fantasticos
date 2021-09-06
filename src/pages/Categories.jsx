import styled from "styled-components";
import ProductsList from "../Components/Eccomerce/Products/ProductList";
import CategoriesPanel from "../Components/Eccomerce/Categories/CategoriesPanel";

const SectionCategories = styled.section`
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;


const Categories = ({id}) => {

    const categoriesID = id

    return (
        <SectionCategories>
            <CategoriesPanel categoriesID={categoriesID}/>
            <ProductsList categoriesID={categoriesID}/>
        </SectionCategories>

    )
}

export default Categories
