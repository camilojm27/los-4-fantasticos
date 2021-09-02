import React from 'react'
import {
    HeroProducts,
    ProductSection,
    SearchBar,
    SearchIconP,
    SearchInput,
    TitleHero
} from "./ProductElements";
import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";

import ProductList from '../../Components/Eccomerce/Products/ProductList'
export const Products = () => {
    return(
        <ProductSection>
            <PrimaryAppBar/>
            <HeroProducts>
                <TitleHero>¿Que deseas comer hoy?</TitleHero>
                <SearchBar>
                    <SearchInput type="text" placeholder="Search..."/>
                    <SearchIconP/>
                </SearchBar>
            </HeroProducts>
            <ProductList/>
        </ProductSection>
    )
}
