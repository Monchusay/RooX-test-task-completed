import React, { FC } from "react";
import style from "./SortBar.module.css";
import {SortBarProps} from "./SortBarContainer";

const SortBar:FC<SortBarProps> = (props) => {

  const onSortByName = () => {
    props.sortByName();
  };

  const onSortByAddress = () => {
    props.sortByAddress();
  };

  return (
    <div className={style.SortBar}>
      <span className={style.SortBarHeader}>Сортировка</span>
      <button className={style.SortBarButton1} onClick={onSortByName}>
        по имени
      </button>
      <button className={style.SortBarButton2} onClick={onSortByAddress}>
        по городу
      </button>
    </div>
  );
};

export default SortBar;
