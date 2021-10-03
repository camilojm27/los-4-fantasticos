import {Redirect, Route, Switch} from "react-router-dom"
import ProfileSettings from "../pages/profile/ProfileSettings";
import {ProfileOrder} from "../pages/profile/ProfileOrder";
import {ProductAllScreen} from "../pages/products/ProductAllScreen";
import SobreNosotros from "../pages/AboutUs";
import {Cart} from "../Components/Eccomerce/Cart";
import Checkout from "../Components/Eccomerce/Checkout/Checkout";

const PrivateRoutesCustomer = () => {
    return (
        <Switch>
            <Route exact path="/products/:id?" component={ProductAllScreen}/>
            <Route exact path="/profile/settings" component={ProfileSettings}/>
            <Route exact path="/profile/order" component={ProfileOrder}/>
            <Route exact path="/profile/privacy" component={ProfileSettings}/>
            <Route exact path="/about" component={SobreNosotros}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/checkout" component={Checkout}/>


            <Redirect path="/**" to="/products"/>
        </Switch>
    )
}

export default PrivateRoutesCustomer
