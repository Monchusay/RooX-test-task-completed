import React, {FC} from "react";
import style from "./App.module.css";
import UserListContainer from "./UserList/UserListContainer";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SortBarContainer from "./SortBar/SortBarContainer";
import PersonProfileContainer from "./UserList/PersonProfile/PersonProfileContainer";

const App:FC = () => {
  return (
      <BrowserRouter>
        <div className={style.App}>
          <div className={style.SortBar}>
            <SortBarContainer />
          </div>
          <div className={style.MainObj}>
            <Routes>
              <Route path="/user/:id" element={<PersonProfileContainer />} />
              <Route path="" element={<UserListContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default App;
