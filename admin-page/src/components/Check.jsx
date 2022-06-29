import React from "react";
import Informs from "./Check/Informs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Card } from "../Context";

function Check(props) {
  let { id } = useParams();
  const { users, setUsers } = useContext(Card);
  const [user] = useState(
    users.filter((user) => {
      return user.id === id;
    })
  );
  const [nameStatus, setNameStatus] = useState(false);
  const [fmailyStatus, setFamilyStatus] = useState(false);
  const [phoneNubmerStatus, setPhoneNumberStatus] = useState(false);
  const [idNoStatus, setIdNoStatus] = useState(false);
  const [birthDatestatus, setBirthDateStatus] = useState(false);
  const [addressStatus, setAddressStatus] = useState(false);
  const [profilePicStatus, setProfilePicStatus] = useState(false);
  const navigate = useNavigate();
  const changeStatus = () => {
    if (
      nameStatus === true &&
      fmailyStatus === true &&
      phoneNubmerStatus === true &&
      idNoStatus === true &&
      birthDatestatus === true &&
      addressStatus === true &&
      profilePicStatus === true
    ) {
      setUsers(
        users.map((user) => {
          return user.id === id
            ? {
                name: user.name,
                family: user.family,
                phoneNumber: user.phoneNumber,
                idNo: user.idNo,
                birthDate: user.birthDate,
                address: user.address,
                profilePic: user.profilePic,
                id: user.id,
                check: user.check,
                status: true,
              }
            : user;
        })
      );
    }
    navigate("/");
  };

  return (
    <div className="App">
      <div className="Check__container">
        <Informs label="Name:" value={user[0].name} status={setNameStatus} />
        <Informs
          label="Family Name:"
          value={user[0].family}
          status={setFamilyStatus}
        />
        <Informs
          label="Mobile:"
          value={user[0].phoneNumber}
          status={setPhoneNumberStatus}
        />
        <Informs label="ID NO." value={user[0].idNo} status={setIdNoStatus} />
        <Informs
          label="Birth Date:"
          value={user[0].birthDate}
          status={setBirthDateStatus}
        />
        <Informs
          label="Address:"
          value={user[0].address}
          status={setAddressStatus}
        />
        <div className="informs__div-profile-pic">
          <p className="informs__div__label-file">profilePic:</p>
          <div className="profile-picture profile-picture--flex25">
            <img
              src={user[0].profilePic}
              className="profile-picture__img"
              alt="profile"
            ></img>
          </div>
          <div className="informs__div__buttons-profile-pic">
            <button
              className="decline"
              onClick={() => {
                setProfilePicStatus(false);
              }}
            />
            <button
              className="accept"
              onClick={() => {
                setProfilePicStatus(true);
              }}
            />
          </div>
          <div className="empty-div"></div>
        </div>
        <div className="buttons-outer-div">
          <div className="buttons-outer-div__div">
            <Link to="/">
              <button className="btn btn-red buttons-outer-div__div__back-button">
                back
              </button>
            </Link>
            <button className="btn btn-blue" onClick={changeStatus}>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
