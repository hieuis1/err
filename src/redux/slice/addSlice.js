import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};
const addStudent = createAsyncThunk();
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {},
});

export const {} = addSlice.actions;

export default addSlice.reducer;
