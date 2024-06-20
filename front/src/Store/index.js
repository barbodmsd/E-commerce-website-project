import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authSlice from "./Slices/authSlice";
import cartSlice from "./Slices/cartSlice";

// redux persist
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  authSlice,
  cartSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
// create store
const store = configureStore({
  // meet all slices to store
  reducer: { persistedReducer },
});
export default store;
