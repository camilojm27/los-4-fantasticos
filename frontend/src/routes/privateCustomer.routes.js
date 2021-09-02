
import {Switch,Route} from "react-router-dom"
import {PrivateRouteCustomer, PublicRoute} from "./helperRoutes"
import Categories from "../pages/Categories";
import ProfileSettings from "../pages/profile/ProfileSettings";
import {ProfileOrder} from "../pages/profile/ProfileOrder";
import {ProductAllScreen} from "../pages/products/ProductAllScreen";

const PrivateRoutesCustomer = () => {
    return (
        <Switch>
            <Route exact path ="/products/:id?" component={ProductAllScreen} />
            <Route exact path="/profile/settings" component={ProfileSettings}  />
            <Route exact path="/profile/order" component={ProfileOrder}  />
            <Route exact path="/profile/privacy" component={ProfileSettings}  />
        </Switch>
    )
}

export default PrivateRoutesCustomer
