import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD"
const MINUS = "MINUS"

number.innerText = 0;

// reducer
// if-else 보다 switch case 사용
const countModifier = (count = 0, action) => {
  switch (action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

// state 변할 때마다 onChange 실행
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type:ADD})
}

const handleMinus = () => {
  countStore.dispatch({type:MINUS})
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)



