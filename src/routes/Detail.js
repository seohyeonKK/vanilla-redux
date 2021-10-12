import { connect } from "react-redux";
import { useParams } from "react-router";
import { actionCreators, remove } from "../store";

const Detail = ({ toDo, onBtnClick, history }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button
        onClick={() => {
          onBtnClick();
          history.push("/");
        }}
      >
        delete
      </button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      dispatch(remove(parseInt(ownProps.match.params.id)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
