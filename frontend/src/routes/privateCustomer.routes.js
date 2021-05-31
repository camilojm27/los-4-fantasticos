
import {Switch,Redirect,Route} from "react-router-dom"
import {PrivateRouteCustomer} from "./helperRoutes"
import Categories from "../pages/Categories";
import Management from '../pages/Management/Management'
const PrivateRoutesCustomer = () => {
    return (
        <Switch>
      
            <PrivateRouteCustomer exact path="/categories/:id?" component={Categories} />
            <PrivateRouteCustomer exact path="/profile" component={Categories} />
   
            <Route exact path="*" render={() => {
                return <Redirect to ="/profile/"/>
            }} />

        </Switch>
    )
}

export default PrivateRoutesCustomer