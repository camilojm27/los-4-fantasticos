import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {getProductListReducer} from "./reducers/productReducers";
import {getCategoryListReducer} from "./reducers/categoryReducer"
import {getInvoiceListReducer} from "./reducers/invoiceReducer"
import {AuthReducer} from "./reducers/authReducer"
import { getUsersListReducer } from "./reducers/userReducer";

const initialState = {}

const reducer = combineReducers({
    productList: getProductListReducer,
    categoryList: getCategoryListReducer,
    invoiceList: getInvoiceListReducer,
    userList : getUsersListReducer,
    auth: AuthReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store
