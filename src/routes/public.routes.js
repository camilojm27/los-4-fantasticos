import Home from '../pages'
import {Redirect, Switch} from "react-router-dom"
import {PublicRoute} from "./helperRoutes"
import {ProductAllScreen} from "../pages/products/ProductAllScreen";
import Categories from "../pages/Categories";
import SobreNosotros from "../pages/AboutUs";
import {Cart} from "../Components/Eccomerce/Cart";
import Checkout from "../Components/Eccomerce/Checkout/Checkout";

const PublicRoutes = () => {

    return (
        <Switch>
            <PublicRoute exact path="/" component={Home}/>
            <PublicRoute exact path="/categories/:id?" component={Categories}/>
            <PublicRoute exact path="/about" component={SobreNosotros}/>
            <PublicRoute exact path="/products/:id?" component={ProductAllScreen}/>
            <PublicRoute exact path="/cart" component={Cart}/>
            <PublicRoute exact path="/checkout" component={Checkout}/>
            <Redirect path="/**" to="/products"/>
        </Switch>
    )
}

export default PublicRoutes
