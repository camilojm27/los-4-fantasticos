import Home from '../pages'
import {Redirect, Switch} from "react-router-dom"
import {PublicRoute} from "./helperRoutes"
import {ProductAllScreen} from "../pages/products/ProductAllScreen";
import Categories from "../pages/Categories";

const PublicRoutes = () => {

    return (
        <Switch>
            <PublicRoute exact path="/categories/:id?" component={Categories}/>
            <PublicRoute exact path="/" component={Home}/>
            <PublicRoute exact path="/products/:id?" component={ProductAllScreen}/>
            <Redirect path="/**" to="/products"/>
        </Switch>
    )
}

export default PublicRoutes
