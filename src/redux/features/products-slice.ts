import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  isEditProduct: boolean;
};

const initialState: ProductsState = {
  isEditProduct: false
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleOpenEditModal: (state: ProductsState) => {
      state.isEditProduct = true;
    },
    handleCloseEditModal: (state: ProductsState) => {
      state.isEditProduct = false;
    }
  }
});

export const { handleOpenEditModal, handleCloseEditModal } = products.actions;
export default products.reducer;
