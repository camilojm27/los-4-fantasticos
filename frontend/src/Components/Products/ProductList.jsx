import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductList} from "../../actions/productAction";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const SelfProductList = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`

const ProductList = (props) => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProductList())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    return(
        <SelfProductList>
            {loading ? <h1>Cargando</h1> : error ? <h1>{error}</h1> :
                 products.filter(function (product) {
                    if (props.categoriesID){
                        return  product.category_id === Number(props.categoriesID)
                    }
                    return product
                }).map(product =>
                        <ProductCard
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />
                        )
            }
        </SelfProductList>
    )
}

export default ProductList