import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchProducts = createAsyncThunk('fetchProducts', async() => {
    const response = await fetch('https://items-bvkm.onrender.com/items');
    return response.json();
});

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
       builder.addCase(fetchProducts.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
       });
       builder.addCase(fetchProducts.rejected, (state, action) => {
         console.log('Error', action.payload);
         state.isError = true;
       });
    },
});


export default productSlice.reducer;    