import { connect } from "react-redux";
import {sortByAddressActionCreator, sortByNameActionCreator} from "../Redux/MainObjPageReducer";
import SortBar from "./SortBar";
import {Dispatch} from "redux";

export interface SortBarProps {
  sortByName: () => void;
  sortByAddress: () => void;
}
let mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    sortByName: () => {
      dispatch(sortByNameActionCreator());
    },
    sortByAddress: () => {
      dispatch(sortByAddressActionCreator())
    }
  };
};

const SortBarContainer = connect(()=>({}), mapDispatchToProps)(SortBar);

export default SortBarContainer;
