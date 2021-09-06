import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'


export const PrivateRouteManagement = ({component, ...options}) => {
    const {isLoggedIn} = useSelector((state) => state.auth)

    const {user: currentUser} = useSelector((state) => state.auth)
    if (isLoggedIn && currentUser.user.role === 1) return <Route {...options} component={component}/>
    return <Redirect to="/Management/"/>

}


export const PrivateRouteCustomer = ({component, ...options}) => {
    const {isLoggedIn} = useSelector((state) => state.auth)

    const {user: currentUser} = useSelector((state) => state.auth)
    if (isLoggedIn && currentUser.user.role === 0) return <Route {...options} component={component}/>
    return <Redirect to="/profile/"/>

}


export const PublicRoute = ({component, ...options}) => {
    const {isLoggedIn} = useSelector((state) => state.auth)

    if (!isLoggedIn) return <Route {...options} component={component}/>
    return <Redirect to="/"/>

}
