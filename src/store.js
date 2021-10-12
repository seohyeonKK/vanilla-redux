import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // (initialState)
// // can mutate the state
// const reducer = createReducer([], {
//   // action
//   [addToDo]: (state, action) => {
//     // return X : mutate the state
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    // addToDo: (state, action) => {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    // deleteToDo: (state, action) =>
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// adds default
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;
export default store;
