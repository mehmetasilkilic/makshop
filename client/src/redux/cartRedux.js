import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
      state.products.map(product => {
        if (product._id === action.payload._id) {
          const nextProducts = state.products.filter(
            item => item._id !== product._id
          );
          state.products = nextProducts;
        }
        return state;
      });
    },
    addToCart: (state, action) => {
      state.quantity += 1;
      state.total += action.payload.price;
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, quantity: 1 };
        state.products.push(tempProductItem);
      }
    },
    decreaseCart: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price;
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const nextCartItems = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = nextCartItems;
      }
    },
  },
});

export const { addProduct, removeProduct, addToCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;