import React, {FC} from "react";
import style from "./UserListItem.module.css";
import { NavLink } from "react-router-dom";

const UserListItem:FC<{name:string, city:string, company:string, id:number}> = (props) => {
  return (
    <div className={style.MainObjItem}>
      <div>
        <span className={style.StaticElement}> ФИО: </span>{" "}
        <span className={style.ChangingElement}>{props.name}</span>
      </div>
      <div>
        <span className={style.StaticElement}>город:</span>{" "}
        <span className={style.ChangingElement}>{props.city}</span>
      </div>
      <div className={style.LastElement}>
        <div>
          <span className={style.StaticElement}>компания:</span>{" "}
          <span className={style.ChangingElement}>"{props.company}"</span>
        </div>
        <div className={style.Link}>
          <NavLink to={`/user/${props.id}`}>Подробнее</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
