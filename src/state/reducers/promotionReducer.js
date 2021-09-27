import {
    PROMOTION_LIST_FAIL,
    PROMOTION_LIST_REQUEST,
    PROMOTION_LIST_SUCCESS,
    PROMOTION_REQUEST,
    PROMOTION_REQUEST_FAIL,
    PROMOTION_REQUEST_SUCCESS
} from "../constants/promotionConstants";

const INITIAL_STATE = {
  loading: true,
  promotions: [],
  error: ""
}

export const getPromotionListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case PROMOTION_LIST_REQUEST:
          return {...state, loading: true}
      case PROMOTION_LIST_SUCCESS:
          return {...state, loading: false, promotions: action.payload}
      case PROMOTION_LIST_FAIL:
          return {...state, loading: false, error: action.payload}


      case PROMOTION_REQUEST:
          return {...state, loading: true}
      case PROMOTION_REQUEST_SUCCESS:
          return {...state, loading: false}
      case PROMOTION_REQUEST_FAIL:
          return {...state, loading: false, error: action.payload}

      default:
          return state
  }
}

