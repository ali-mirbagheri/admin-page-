import { useParams, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Card } from "../Context";
import FormShow from "./public/FormShow";

function Edit(props) {
  let { id } = useParams();
  const { users, setUsers } = useContext(Card);
  const [user] = useState(
    users.filter((user) => {
      return user.id === id;
    })
  );
  const navigate = useNavigate();
  const [name, setName] = useState(user[0].name);
  const [family, setFamily] = useState(user[0].family);
  const [phoneNumber, setPhoneNumber] = useState(user[0].phoneNumber);
  const [idNo, setIdNo] = useState(user[0].idNo);
  const [birthDate, setBirthDate] = useState(user[0].birthDate);
  const [address, setAddress] = useState(user[0].address);
  const [profilePic, setProfilePic] = useState(user[0].profilePic);
  const editUser = () => {
    if (
      Boolean(name.trim()) === true &&
      Boolean(family.trim()) === true &&
      Boolean(phoneNumber) === true &&
      Boolean(idNo) === true &&
      Boolean(birthDate) === true &&
      Boolean(address.trim()) === true &&
      Boolean(profilePic) === true
    ) {
      setUsers(
        users.map((user) => {
          return user.id === id
            ? {
                name,
                family,
                phoneNumber,
                idNo,
                birthDate,
                address,
                profilePic,
                id: user.id,
                status: user.status,
                check: user.check,
              }
            : user;
        })
      );
      navigate("/");
    }
  };
  return (
    <FormShow
      name={name}
      family={family}
      phoneNumber={phoneNumber}
      idNo={idNo}
      birthDate={birthDate}
      address={address}
      profilePic={profilePic}
      setName={setName}
      setFamily={setFamily}
      setPhoneNumber={setPhoneNumber}
      setIdNo={setIdNo}
      setBirthDate={setBirthDate}
      setAddress={setAddress}
      setProfilePic={setProfilePic}
      userFunction={editUser}
    />
  );
}

export default Edit;
