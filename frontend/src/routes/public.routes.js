import Home from '../pages/index'
import {Switch,Redirect} from "react-router-dom"
import {PublicRoute} from "./helperRoutes"
import { useSelector } from 'react-redux'
const PublicRoutes = () => {

    return (
        <Switch>
            <PublicRoute exact path = "/" component={Home} />
            <Redirect path="/**" to="/"/>
        </Switch>
    )
}

export default PublicRoutes