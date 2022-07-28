import { ActionTypes } from "../contants/action-types";
import axios from "axios";

export const getMostPopular = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/api/most-popular");
  dispatch({
    type: ActionTypes.GET_POPULAR,
    payload: response.data,
  });
};

export const getProducts = (brand, quantity) => async (dispatch) => {
  const response = await axios.post(
    `http://localhost:3000/api/brand/${brand}`,
    {
      quantity: quantity,
    }
  );
  dispatch({
    type: ActionTypes.GET_PRODUCTS,
    payload: {
      products: response.data,
      brand: brand,
    },
  });
};

export const getProductPrices = (styleId) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3000/api/product/${styleId}`
  );
  dispatch({
    type: ActionTypes.GET_PRICES,
    payload: response.data,
  });
};

export const resetSelected = () => (dispatch) => {
  dispatch({ type: ActionTypes.RESET_SELETED });
};

export const getSeries = (make, quantity) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3000/api/make/${make}`, {
    quantity: quantity,
  });
  dispatch({
    type: ActionTypes.GET_SERIES,
    payload: response.data,
  });
};
