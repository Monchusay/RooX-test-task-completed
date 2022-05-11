import React, { FC, useEffect, useState } from "react";
import style from "./PersonProfile.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import { MainObjPageState, User } from "../../Redux/MainObjPageReducer";
import { PersonProfileDispatch } from "./PersonProfileContainer";

const PersonProfile: FC<MainObjPageState & PersonProfileDispatch> = (props) => {

  const [user, setUser] = useState<User | null>(null);
  const [editable, setEditable] = useState<boolean>(false);
  const [invalidName, setInvalidName] = useState<boolean>(false);
  const [invalidUserName, setInvalidUserName] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidStreet, setInvalidStreet] = useState<boolean>(false);
  const [invalidCity, setInvalidCity] = useState<boolean>(false);
  const [invalidZipcode, setInvalidZipcode] = useState<boolean>(false);
  const [invalidPhone, setInvalidPhone] = useState<boolean>(false);
  const [invalidWebsite, setInvalidWebsite] = useState<boolean>(false);

  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (props.users.length === 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          setUser(response.data);
        });
    } else {
      setUser(props.users.find((user) => user.id === Number(id)) || null);
    }
  }, [id]);

  let OnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidName(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, name: e.target.value });
    }
  };
  let OnUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidUserName(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, username: e.target.value });
    }
  };
  let OnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidEmail(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, email: e.target.value });
    }
  };
  let OnStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidStreet(e.target.value.length === 0);
    if (user !== null) {
      setUser({
        ...user,
        address: { ...user.address, street: e.target.value },
      });
    }
  };
  let OnCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidCity(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, address: { ...user.address, city: e.target.value } });
    }
  };
  let OnZipcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidZipcode(e.target.value.length === 0);
    if (user !== null) {
      setUser({
        ...user,
        address: { ...user.address, zipcode: e.target.value },
      });
    }
  };
  let OnPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidPhone(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, phone: e.target.value });
    }
  };
  let OnWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidWebsite(e.target.value.length === 0);
    if (user !== null) {
      setUser({ ...user, website: e.target.value });
    }
  };

  let onSubmit = () => {
    if (invalidName) {
      return;
    }
    if (invalidUserName) {
      return;
    }
    if (invalidEmail) {
      return;
    }
    if (invalidStreet) {
      return;
    }
    if (invalidCity) {
      return;
    }
    if (invalidZipcode) {
      return;
    }
    if (invalidPhone) {
      return;
    }
    if (invalidWebsite) {
      return;
    }
    setEditable(false);
    console.log(JSON.stringify(user));
  };

  return (
    <div className={style.PersonProfile}>
      {user === null ? (
        <Preloader />
      ) : (
        <>
          <div className={style.PersonProfileHeader}>
            <span>Профиль пользователя</span>
            <button
              className={style.PersonProfileRedButton}
              onClick={() => setEditable(true)}
            >
              {" "}
              Редактировать{" "}
            </button>
          </div>
          <div className={style.PersonProfileMainArea}>
            <div className={style.PersonProfileBox}>
              <span>Name</span>
              <input
                value={user.name}
                onChange={editable ? OnNameChange : () => {}}
                className={`${invalidName && style.PersonProfileInvalidTextBox}
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>User name</span>
              <input
                value={user.username}
                onChange={editable ? OnUserNameChange : () => {}}
                className={`${
                  invalidUserName && style.PersonProfileInvalidTextBox
                }
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>E-mail</span>
              <input
                value={user.email}
                onChange={editable ? OnEmailChange : () => {}}
                className={`${invalidEmail && style.PersonProfileInvalidTextBox}
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>Street</span>
              <input
                value={user.address.street}
                onChange={editable ? OnStreetChange : () => {}}
                className={`${
                  invalidStreet && style.PersonProfileInvalidTextBox
                }
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>City</span>
              <input
                value={user.address.city}
                onChange={editable ? OnCityChange : () => {}}
                className={`${invalidCity && style.PersonProfileInvalidTextBox}
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>Zip code</span>
              <input
                value={user.address.zipcode}
                onChange={editable ? OnZipcodeChange : () => {}}
                className={`${
                  invalidZipcode && style.PersonProfileInvalidTextBox
                }
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>Phone</span>
              <input
                value={user.phone}
                onChange={editable ? OnPhoneChange : () => {}}
                className={`${invalidPhone && style.PersonProfileInvalidTextBox}
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBox}>
              <span>Website</span>
              <input
                value={user.website}
                onChange={editable ? OnWebsiteChange : () => {}}
                className={`${
                  invalidWebsite && style.PersonProfileInvalidTextBox
                }
                  ${
                    editable
                      ? style.PersonProfileEditableTextBox
                      : style.PersonProfileTextBox
                  }`}
              />
            </div>
            <div className={style.PersonProfileBoxComment}>
              <span>Comment</span>
              <textarea className={style.PersonProfileTextBoxComment} />
            </div>
          </div>
          <div className={style.PersonProfileSave}>
            <button
              className={
                editable
                  ? style.PersonProfileSaveButton1
                  : style.PersonProfileSaveButton
              }
              onClick={onSubmit}
            >
              Отправить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonProfile;
