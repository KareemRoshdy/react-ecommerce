import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    users: UserSlice,
  },
});

export default store;
