import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ITEM_ADDED,
  ITEM_PROCESSING,
  ADD_ITEM_ERROR
} from "./types";
import axios from "axios";

import { returnErrors } from "./errorActions";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const addItem = (item, token) => dispatch => {
  // set item_processing to disable add_item button
  dispatch(setItemProcessing());

  const config = {
    url: "/api/items",
    method: "post",
    headers: { "x-auth-token": token },
    data: item
  };
  axios(config)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_ITEM_ERROR });
      dispatch(
        returnErrors(err.response.data, err.response.status, "ADD_ITEM_ERROR")
      );
    });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const setItemProcessing = () => {
  return {
    type: ITEM_PROCESSING
  };
};
