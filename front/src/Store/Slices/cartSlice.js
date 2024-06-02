import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // write the actions
  reducers: {
      // delete all what in cart
    clear: (state) => {
      state.list = [];
    },
    removeItem: (state, actions) => {
      //map on list
      state.list = state.list.filter((e) => {
        //if item was exist
        if (e.id == actions.payload) {
          e.quantity = e.quantity - 1;
          //   if count the item was zero than delete that
          if (e.quantity == 0) {
            return false;
          }
          return e; //put changed item
        }
        return true; //put the item in his place
      });
    },
    addItem: (state, action) => {
      let add = false;
      state.list = state.list.map((e) => {
        //if item was exist
        if (e.quantity == action.payload.id) {
          e.quantity = e.quantity + 1;
          add = true;
          return e;
        }
      });
      //   if items not in the list then add it
      if (!add) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const {removeItem,addItem,clear}=cartSlice.actions
export default cartSlice.reducer
// export what we need