import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductList} from "../../../state/actions/productAction";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const SelfProductList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 80%;
  margin: auto;

`

const ProductList = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    return (
        <SelfProductList>
            {loading ? <h1>Cargando</h1> : error ? <h1>{error}</h1> :
                products.filter(function (product) {
                    if (props.categoriesID) {
                        return product.category_id === Number(props.categoriesID)
                    }
                    return product
                }).map(product =>
                    <ProductCard
                        name={product.name}
                        image={product.image}
                        price={product.unit_price}
                        description={product.description}
                    />
                )
            }
        </SelfProductList>
    )
}

export default ProductList
