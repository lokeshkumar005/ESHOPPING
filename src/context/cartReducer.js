import { ADD_CART, REMOVE_CART, INCREASE_ITEM, DECREASE_ITEM } from "./actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREASE_ITEM:
      const temp1 = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state.cart, cart: temp1 };

    case DECREASE_ITEM:
      const temp2 = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      return { ...state.cart, cart: temp2 };

    default:
      return state;
  }
};

export default cartReducer;
