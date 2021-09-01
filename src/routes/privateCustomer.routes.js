
import {Switch,Route} from "react-router-dom"
import {PrivateRouteCustomer} from "./helperRoutes"
import Categories from "../pages/Categories";
import ProfileSettings from "../pages/profile/ProfileSettings";
import {ProfileOrder} from "../pages/profile/ProfileOrder";

const PrivateRoutesCustomer = () => {
    return (
        <Switch>
            <PrivateRouteCustomer exact path="/categories/:id?" component={Categories} />

            <Route exact path="/profile/settings" component={ProfileSettings}  />
            <Route exact path="/profile/order" component={ProfileOrder}  />
            <Route exact path="/profile/privacy" component={ProfileSettings}  />
        </Switch>
    )
}

export default PrivateRoutesCustomer
