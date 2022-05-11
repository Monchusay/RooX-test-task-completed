import React, {FC} from "react";
import style from "./Preloader.module.css"
import puff from "../../puff.svg"

let Preloader:FC = () => {
  return (
    <div className={style.Preloader}>
      <img src={puff} />
    </div>
  );
};

export default Preloader;
