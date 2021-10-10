import { useLayoutEffect } from "react";
import { StrictMode } from "react/cjs/react.production.min";
import { createStore } from "redux";

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

// only return action
// action creator
const addToDo = (text) => {
  return {type: ADD_TODO, text}
}

const deleteToDo = (id) => {
  return {type:DELETE_TODO, id}
}


// never mutate state
// state "read only"
// don't mutate return new state
const reducer = (state = [], action) => {
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state]
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))


// only dispatch action
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  // console.log(e.target.parentNode.id)
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}
const paintToDos = () => {
  const toDos = store.getState()
  ul.innerText = ""
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    li.id = toDo.id
    li.innerText = toDo.text
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.appendChild(btn)
    ul.appendChild(li)
  });
}

store.subscribe(paintToDos)


const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)
