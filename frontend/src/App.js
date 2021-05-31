import React from 'react'

import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import  PublicRoutes  from './routes/public.routes';


import  PrivateRoutesManagement from './routes/privateManagement.routes'
import  PrivateRoutesCustomer from './routes/privateCustomer.routes';



function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
      
    <div>
       {!isLoggedIn ? <PublicRoutes />:currentUser.user.role === 1 ? <PrivateRoutesManagement /> : currentUser.user.role === 0 ? <PrivateRoutesCustomer />:<PublicRoutes />}  

    </div>
     
  );
}

export default App;
