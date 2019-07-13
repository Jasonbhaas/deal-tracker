import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ITEM_ADDED,
  ITEM_PROCESSING,
  ITEM_ERROR
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  itemProcessing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        itemProcessing: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ITEM_PROCESSING:
      return {
        ...state,
        itemProcessing: true
      };
    case ITEM_ERROR:
      return {
        ...state,
        itemProcessing: false,
        loading: false
      };
    default:
      return state;
  }
}
