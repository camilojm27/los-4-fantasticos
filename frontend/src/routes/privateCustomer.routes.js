
import {Switch,Route} from "react-router-dom"
import {PrivateRouteCustomer} from "./helperRoutes"
import Categories from "../pages/Categories";
import Profile from "../pages/Profile";

const PrivateRoutesCustomer = () => {
    return (
        <Switch>
            <PrivateRouteCustomer exact path="/categories/:id?" component={Categories} />

            <Route exact path="/profile" component={Profile}  />

        </Switch>
    )
}

export default PrivateRoutesCustomer
