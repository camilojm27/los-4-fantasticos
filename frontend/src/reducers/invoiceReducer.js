import {INVOICE_LIST_FAIL, INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS} from "../constants/invoiceConstants";

export const getInvoiceListReducer = (state = {loading: true, invoice: []}, action) => {
    switch (action.type) {
        case INVOICE_LIST_REQUEST:
            return {loading: true}
        case INVOICE_LIST_SUCCESS:
            return {loading: false, invoice: action.payload}
        case INVOICE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}