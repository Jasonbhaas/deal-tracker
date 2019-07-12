import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

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
  const config = {
    url: "/api/items",
    method: "post",
    headers: { "x-auth-token": token },
    data: item
  };
  axios(config)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
