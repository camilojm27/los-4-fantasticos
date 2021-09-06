import React from 'react'
import {HeroProducts, ProductSection, SearchBar, SearchIconP, SearchInput, TitleHero} from "./ProductElements";

import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";
import Categories from "../Categories";

export const ProductAllScreen = (props) => {
    const catId = props.match.params.id
    return (
        <ProductSection>
            <PrimaryAppBar/>
            <HeroProducts>
                <TitleHero>¿Que deseas comer hoy?</TitleHero>
                <SearchBar>
                    <SearchInput type="text" placeholder="Search..."/>
                    <SearchIconP/>
                </SearchBar>
            </HeroProducts>
            <Categories id={catId}/>
        </ProductSection>
    )
}
