import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../../state/actions/productAction";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import {Skeleton} from "@material-ui/lab";
import {Box} from "@material-ui/core";

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
        dispatch(getProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    return (
        <SelfProductList>
            {loading ?
                <>
                    <Box pt={0.5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton variant="text" />
                        <Skeleton width="60%" />
                    </Box>
                    <Box pt={0.5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton variant="text" />
                        <Skeleton width="60%" />
                    </Box>
                    <Box pt={0.5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton variant="text" />
                        <Skeleton width="60%" />
                    </Box>
                    <Box pt={0.5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton variant="text" />
                        <Skeleton width="60%" />
                    </Box>
                </>
                : error ? <h1>{error}</h1> :
                products.products.filter(function (product) {
                    if (props.categoriesID) {
                        return product.category_id === Number(props.categoriesID)
                    }
                    return product
                }).map(product =>
                    <ProductCard
                        key={product.name}
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
