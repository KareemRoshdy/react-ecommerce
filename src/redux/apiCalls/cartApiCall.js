import { cartActions } from "../slices/cartSlice";

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(cartActions.addItemToCart(newItem));

    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

// Remove Item From Cart
export function removeFromCart(id) {
  return (dispatch, getState) => {
    dispatch(cartActions.removeItemFromCart(id));

    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

// 19