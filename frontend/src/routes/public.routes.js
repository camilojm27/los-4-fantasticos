import Home from '../pages'
import {Switch,Redirect} from "react-router-dom"
import {PublicRoute} from "./helperRoutes"
import {Products} from "../pages/products/Products";
const PublicRoutes = () => {

    return (
        <Switch>
            <PublicRoute exact path = "/" component={Home} />
            <PublicRoute exact path = "/products" component={Products} />
            <Redirect path="/**" to="/"/>
        </Switch>
    )
}

export default PublicRoutes
