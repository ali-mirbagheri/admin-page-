import React from "react";
import { Link } from "react-router-dom";
import Input from "./FormShow/Input";

function FormShow({
  name,
  setName,
  family,
  setFamily,
  phoneNumber,
  setPhoneNumber,
  idNo,
  setIdNo,
  birthDate,
  setBirthDate,
  profilePic,
  setProfilePic,
  address,
  setAddress,
  userFunction,
}) {
  return (
    <div className="App">
      <div className="container">
        <Input label="Name:" type="text" inputValue={name} setAtt={setName} />
        <Input
          label="Family Name:"
          type="text"
          inputValue={family}
          setAtt={setFamily}
        />
        <Input
          label="Mobile:"
          type="number"
          inputValue={phoneNumber}
          setAtt={setPhoneNumber}
        />
        <Input
          label="ID NO."
          type="number"
          inputValue={idNo}
          setAtt={setIdNo}
        />
        <Input
          label="Birth Date:"
          type="date"
          inputValue={birthDate}
          setAtt={setBirthDate}
        />
        <Input
          label="Address:"
          type="text"
          inputValue={address}
          setAtt={setAddress}
        />
        <div className="form__file-input-div">
          <label className="form__input-div__label">Profile pic:</label>
          {profilePic ? (
            <label
              className="form__file-input-div__label"
              style={{
                backgroundImage: `url(${profilePic})`,
                backgroundSize: "cover",
              }}
            >
              <input
                id="image__frame"
                type="file"
                onChange={(e) => {
                  setProfilePic(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </label>
          ) : (
            <label className="form__file-input-div__label">
              <input
                id="image__frame"
                type="file"
                onChange={(e) => {
                  setProfilePic(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </label>
          )}
        </div>
      </div>
      <div className="buttons-outer-div">
        <div className="buttons-outer-div__div">
          <Link to="/">
            <button className="btn btn-red buttons-outer-div__div__back-button">
              back
            </button>
          </Link>
          <button className="btn btn-blue" onClick={userFunction}>
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormShow;
