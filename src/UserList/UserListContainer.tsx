import {connect} from "react-redux";
import UserList from "./UserList";
import {setUsersActionCreator, toggleIsFetchingActionCreator, User} from "../Redux/MainObjPageReducer";
import {State} from "../Redux/Redux-store";
import {Dispatch} from "redux";

export interface MainObjDispatch {
    setUsers:(users:User[])=> void;
    toggleIsFetching:(isFetching:boolean)=> void;
}

let mapStateToProps = (state:State) => {
    return {
        users: state.MainObjPage.users,
        isFetching: state.MainObjPage.isFetching
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MainObjDispatch => {
    return {
        setUsers: (users:User[]) => {
            dispatch(setUsersActionCreator(users))
        },
        toggleIsFetching: (isFetching:boolean) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}

const UserListContainer = connect(mapStateToProps,mapDispatchToProps)(UserList)

export default UserListContainer