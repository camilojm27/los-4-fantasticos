import React from 'react'

import './App.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages'
import Management from './pages/Management/Management'
import ManagementCategories from './pages/Management/Category/Categories'
import CategoriesEdit from './pages/Management/Category/EditCategories'
import Products from './pages/Management/Products/Products'
import ProductsEdit from './pages/Management/Products/EditProducts'
import Invoices from './pages/Management/Invoices/Invoices'
import InvoicesEdit from './pages/Management/Invoices/EditInoivces'
import Clients from './pages/Management/Clients/Clients'
import ClientsEdit from './pages/Management/Clients/EditClients'
import Admins from './pages/Management/Admins/Admins'
import AdminsEdit from './pages/Management/Admins/EditAdmins'
import Categories from "./pages/Categories";



function App() {
  return (
    <Router>
  
      <Switch>

     
       

        {/*Paginas de la administracion*/}

        <Route path="/Management/" component={Management} exact/>
        <Route path="/Management/Categories" component={ManagementCategories} exact/>
        <Route path="/Management/Categories/edit" component={CategoriesEdit} exact/>
        <Route path="/Management/Products" component={Products} exact/>
        <Route path="/Management/Products/edit" component={ProductsEdit} exact/>
        <Route path="/Management/Invoices" component={Invoices} exact/>
        <Route path="/Management/Invoices/edit" component={InvoicesEdit} exact/>
        <Route path="/Management/Clients" component={Clients} exact/>
        <Route path="/Management/Clients/edit" component={ClientsEdit} exact/>
        <Route path="/Management/Admins" component={Admins} exact/>
        <Route path="/Management/Admins/edit" component={AdminsEdit} exact/>


        {/*Paginas de la tienda*/}


        <Route exact path="/categories/:id?" component={Categories} />
            {/*Pagina principal*/}
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
