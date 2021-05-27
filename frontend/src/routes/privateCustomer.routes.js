
import {Switch,Redirect,Route} from "react-router-dom"
import {PrivateRouteCustomer} from "./helperRoutes"
import Categories from "../pages/Categories";
const PrivateRoutesCustomer = () => {
    return (
        <Switch>
      
            <PrivateRouteCustomer exact path="/categories/:id?" component={Categories} />

            <Route exact path="*" render={() => {
                return <Redirect to ="/profile/"/>
            }} />

        </Switch>
    )
}

export default PrivateRoutesCustomer