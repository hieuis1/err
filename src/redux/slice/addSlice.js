import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: localStorage.getItem("listStudent")
    ? JSON.parse(localStorage.getItem("listStudent"))
    : [],
  updateStudent: undefined,
  filterStudent: [],
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    ADD_STUDENT: (state, action) => {
      state.listStudent.push(action.payload);
      state.filterStudent = state.listStudent;
      localStorage.setItem("listStudent", JSON.stringify(state.listStudent));
    },
    SET_UPDATE: (state, action) => {
      state.updateStudent = action.payload;
    },
    UPDATE_STUDENT: (state, action) => {
      console.log(action.payload);
      let index = state.listStudent.findIndex(
        (item) => (item.maSinhVien = action.payload.maSinhVien)
      );
      if (index > -1) {
        state.listStudent[index] = action.payload;
        state.updateStudent = undefined;
      }
      state.filterStudent = state.listStudent;
      localStorage.setItem("listStudent", JSON.stringify(state.listStudent));
    },
    DELETE_STUDENT: (state, action) => {
      let newData = state.listStudent.filter(
        (item) => item.maSinhVien != action.payload.maSinhVien
      );
      state.listStudent = newData;
      state.filterStudent = state.listStudent;
      localStorage.setItem("listStudent", JSON.stringify(state.listStudent));
    },
    SEARCH_STUDENT: (state, action) => {
      let data = state.listStudent.filter((item) =>
        item.ten.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filterStudent = data;
    },
  },
});

export const {
  ADD_STUDENT,
  SET_UPDATE,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  SEARCH_STUDENT,
} = addSlice.actions;

export default addSlice.reducer;
