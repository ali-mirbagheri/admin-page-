import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../Context";
import { v4 as uuid } from "uuid";
import FormShow from "./public/FormShow";
function Add() {
  const { setUsers } = useContext(Card);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [idNo, setIdNo] = useState();
  const [birthDate, setBirthDate] = useState();
  const [address, setAddress] = useState();
  const [profilePic, setProfilePic] = useState();
  const addUser = () => {
    if (
      Boolean(name.trim()) === true &&
      Boolean(family.trim()) === true &&
      Boolean(phoneNumber) === true &&
      Boolean(idNo) === true &&
      Boolean(birthDate) === true &&
      Boolean(address.trim()) === true &&
      Boolean(profilePic) === true
    ) {
      setUsers((pre) => {
        return [
          ...pre,
          {
            name,
            family,
            phoneNumber,
            idNo,
            birthDate,
            address,
            profilePic,
            status: false,
            id: uuid(),
            check: false,
          },
        ];
      });
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
      userFunction={addUser}
    />
  );
}

export default Add;
