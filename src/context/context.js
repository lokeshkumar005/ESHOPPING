import { createContext, useReducer, useState } from "react";
import { ADD_CART, REMOVE_CART, INCREASE_ITEM, DECREASE_ITEM } from "./actions";
import cartReducer from "./cartReducer";
import axios from "axios";

export const loading = createContext();

const Context = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(1);

  const fetchProduct = async () => {
    setProgress(20);
    // eslint-disable-next-line
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      });
    setLoad(false);
    setProgress(100);
  };

  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCart = (product) => {
    dispatch({
      type: ADD_CART,
      payload: product,
    });
  };
  const removeCart = (itemID) => {
    dispatch({
      type: REMOVE_CART,
      payload: itemID,
    });
  };
  const increaseItem = (itemID) => {
    dispatch({
      type: INCREASE_ITEM,
      payload: itemID,
    });
  };
  const decreaseItem = (itemID) => {
    dispatch({
      type: DECREASE_ITEM,
      payload: itemID,
    });
  };

  return (
    <loading.Provider
      value={{
        load,
        setLoad,
        data,
        setData,
        progress,
        setProgress,
        page,
        setPage,
        addCart,
        removeCart,
        cart: state.cart,
        increaseItem,
        decreaseItem,
        fetchProduct,
      }}
    >
      {children}
    </loading.Provider>
  );
};

export default Context;
