import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes } from "../contants/action-types";

const initialState = {
  popular: [],
  jordan: [],
  nike: [],
  adidas: [],
  newbalance: [],
  reebok: [],
  converse: [],
  vans: [],
  selected: null,
  series: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...payload.product };
    case ActionTypes.GET_POPULAR:
      return { ...state, popular: payload };
    case ActionTypes.GET_PRODUCTS:
      return { ...state, [payload.brand]: payload.products };
    case ActionTypes.GET_PRICES:
      return { ...state, selected: payload };
    case ActionTypes.RESET_SELETED:
      return { ...state, selected: null };
    case ActionTypes.GET_SERIES:
      return { ...state, series: payload };
    default:
      return state;
  }
};
