import { INVOICE_LIST_FAIL, INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS, INVOICE_REQUEST, INVOICE_REQUEST_FAIL, INVOICE_REQUEST_SUCCESS } from "../constants/invoiceConstants";

const INITIAL_STATE = {
    loading: true,
    invoice: [],
    error:""
}

export const getInvoiceListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INVOICE_LIST_REQUEST:
            return { ...state, loading: true }
        case INVOICE_LIST_SUCCESS:
            return { ...state, loading: false, invoice: action.payload }
        case INVOICE_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }

        case INVOICE_REQUEST:
            return { ...state, loading: true }
        case INVOICE_REQUEST_SUCCESS:
            return { ...state, loading: false }
        case INVOICE_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }


        default:
            return state
    }
}