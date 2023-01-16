import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchdata = createAsyncThunk("ProductSlice/fetchdata",async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})


export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState :[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchdata.fulfilled, (state, action) => {
       return action.payload
    })
  },
})

export const {} = ProductSlice.actions

export default ProductSlice.reducer