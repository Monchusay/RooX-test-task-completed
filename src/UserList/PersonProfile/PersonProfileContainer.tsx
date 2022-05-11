import { connect } from "react-redux";
import PersonProfile from "./PersonProfile";
import {
  toggleIsFetchingActionCreator
} from "../../Redux/MainObjPageReducer";
import {State} from "../../Redux/Redux-store";
import {Dispatch} from "redux";

export interface PersonProfileDispatch {
  toggleIsFetching:(isFetching:boolean)=> void;
}

let mapStateToProps = (state:State) => {
  return {
    users: state.MainObjPage.users,
    isFetching: state.MainObjPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch:Dispatch):PersonProfileDispatch => {
  return {
    toggleIsFetching: (isFetching:boolean) => {
      dispatch(toggleIsFetchingActionCreator(isFetching));
    },
  };
};
const PersonProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonProfile);

export default PersonProfileContainer;
