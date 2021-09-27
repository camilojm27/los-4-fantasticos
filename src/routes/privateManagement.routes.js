import {Redirect, Route, Switch} from "react-router-dom"
import {PrivateRouteManagement, PublicRoute} from "./helperRoutes"
import Management from '../pages/Management/Management'
import ManagementCategories from '../pages/Management/Category/Categories'
import CategoriesEdit from '../pages/Management/Category/EditCategories'
import ManagementProducts from '../pages/Management/Products/ManagementProducts'
import ProductsEdit from '../pages/Management/Products/EditProducts'
import Invoices from '../pages/Management/Invoices/Invoices'
import InvoicesEdit from '../pages/Management/Invoices/EditInoivces'
import Clients from '../pages/Management/Clients/Clients'
import ClientsEdit from '../pages/Management/Clients/EditClients'
import Admins from '../pages/Management/Admins/Admins'
import AdminsEdit from '../pages/Management/Admins/EditAdmins'
import ProfileSettings from "../pages/profile/ProfileSettings";
import {ProfileOrder} from "../pages/profile/ProfileOrder";
import {ProductAllScreen} from "../pages/products/ProductAllScreen";
import Categories from "../pages/Categories";
import SobreNosotros from "../pages/AboutUs";
import Promotions from "../pages/Management/Promotion/Promotions"
import Avenues from "../pages/Management/Avenues/Avenues"

const PrivateRoutesManagement = () => {
    return (
        <Switch>

            <PrivateRouteManagement path="/Management/" component={Management} exact/>
            <PrivateRouteManagement path="/Management/Categories" component={ManagementCategories} exact/>
            <PrivateRouteManagement path="/Management/Categories/edit" component={CategoriesEdit} exact/>
            <PrivateRouteManagement path="/Management/ProductAllScreen" component={ManagementProducts} exact/>
            <PrivateRouteManagement path="/Management/ProductAllScreen/edit" component={ProductsEdit} exact/>
            <PrivateRouteManagement path="/Management/Invoices" component={Invoices} exact/>
            <PrivateRouteManagement path="/Management/Invoices/edit" component={InvoicesEdit} exact/>
            <PrivateRouteManagement path="/Management/Clients" component={Clients} exact/>
            <PrivateRouteManagement path="/Management/Clients/edit" component={ClientsEdit} exact/>
            <PrivateRouteManagement path="/Management/Admins" component={Admins} exact/>
            <PrivateRouteManagement path="/Management/Admins/edit" component={AdminsEdit} exact/>
            <PrivateRouteManagement path="/Management/Promotions" component={Promotions} exact/>
            <PrivateRouteManagement path="/Management/Avenues" component={Avenues} exact/>
            <Route exact path="/profile/settings" component={ProfileSettings}/>
            <Route exact path="/profile/order" component={ProfileOrder}/>
            <Route exact path="/products/:id?" component={ProductAllScreen}/>
            <Route exact path="/categories/:id?" component={Categories}/>
                <PrivateRouteManagement exact path="/about" component={SobreNosotros}/>

            <Route exact path="*" render={() => {
                return <Redirect to="/Management/"/>
            }}/>

        </Switch>
    )
}

export default PrivateRoutesManagement
