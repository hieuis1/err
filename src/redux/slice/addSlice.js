import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: [],
  updateStudent: undefined,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    ADD_STUDENT: (state, action) => {
      state.listStudent.push(action.payload);
    },
  },
});

export const { ADD_STUDENT } = addSlice.actions;

export default addSlice.reducer;
