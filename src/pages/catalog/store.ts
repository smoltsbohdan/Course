import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICatalogElement, ICatalogStore } from "./types";
import { mockCatalog } from "./__mocks__/store";


const storeName = "catalog";

const initialState: ICatalogStore = {
  catalog: mockCatalog,
}

export const catalogSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setCatalog(state: ICatalogStore, action: PayloadAction<ICatalogElement[]>) {
      state.catalog = action.payload;
    }
  }
})

export const catalogActions = {
  setCatalog: catalogSlice.actions.setCatalog,
};

export const catalogReducer = catalogSlice.reducer;
