import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// give state from store to Home
// connect()는 Home으로 보내는 props에 추가되도록 함
// store의 state를 component의 props로
const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  // return 하는 것이 곧 component의 prop으로 추가
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
