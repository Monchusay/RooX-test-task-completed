import { compare } from "../Helpers/Compare";

let InitialState: MainObjPageState = {
  users: [],
  isFetching: true,
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface MainObjPageState {
  users: User[];
  isFetching: boolean;
}

type ActionTypes = "SET_USERS" | "TOGGLE_IS_FETCHING" | "SORT_BY_NAME" | "SORT_BY_ADDRESS"

const MainObjPageReducer = (
  state = InitialState,
  action: { type: ActionTypes } & MainObjPageState
) => {
  switch (action.type) {
    case "SET_USERS": {
      return { ...state, users: [...action.users] };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "SORT_BY_NAME": {
      return {
        ...state,
        users: [
          ...state.users.sort((userLeft, userRight) =>
            compare(userLeft.name, userRight.name)
          ),
        ],
      };
    }
    case "SORT_BY_ADDRESS": {
      return {
        ...state,
        users: [
          ...state.users.sort((userLeft, userRight) =>
            compare(userLeft.address.city, userRight.address.city)
          ),
        ],
      };
    }
  }
  return state;
};

export const sortByNameActionCreator = () => {
  return {
    type: "SORT_BY_NAME",
  };
};

export const sortByAddressActionCreator = () => {
  return {
    type: "SORT_BY_ADDRESS",
  };
};

export const setUsersActionCreator = (users:User[]) => {
  return {
    type: "SET_USERS",
    users: users,
  };
};

export const toggleIsFetchingActionCreator = (isFetching:boolean) => {
  return {
    type: "TOGGLE_IS_FETCHING",
    isFetching: isFetching,
  };
};

export default MainObjPageReducer;
