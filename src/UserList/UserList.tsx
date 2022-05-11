import React, {FC, useEffect} from "react";
import style from "./UserList.module.css";
import UserListItem from "./UserListItem/UserListItem";
import axios from "axios";
import Preloader from "./Preloader/Preloader";
import {MainObjPageState} from "../Redux/MainObjPageReducer";
import {MainObjDispatch} from "./UserListContainer";

const UserList:FC<MainObjPageState & MainObjDispatch> = (props) => {

  useEffect(() => {
    props.toggleIsFetching(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      props.setUsers(response.data);
      props.toggleIsFetching(false);
    });
  }, []);

  let MainObjElement = props.users.map((u) => (
    <UserListItem
      key={u.id}
      name={u.name}
      city={u.address.city}
      company={u.company.name}
      id={u.id}
    />
  ));

  return (
    <div className={style.MainObj}>
      <span className={style.MainObjHeader}>Список пользователей</span>
      <div>{props.isFetching ? <Preloader /> : null}</div>
      <div className={style.MainObjItem}>{MainObjElement}</div>
      <div className={style.MainObjUsersCount}>
        Найдено {props.users.length} пользователей
      </div>
    </div>
  );
};

export default UserList;
