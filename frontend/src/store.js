import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {getProductListReducer} from "./reducers/productReducers";
import {getCategoryListReducer} from "./reducers/categoryReducer"
import {getInvoiceListReducer} from "./reducers/invoiceReducer"
const initialState = {}

const reducer = combineReducers({
    productList: getProductListReducer,
    categoryList: getCategoryListReducer,
    invoiceList: getInvoiceListReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store