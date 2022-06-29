import React, { useContext } from "react";
import SearchBar from "./UserCards/SearchBar";
import { useNavigate } from "react-router-dom";
import { Card } from "../Context";
import IdentityCard from "./UserCards/IdentityCard";
import { useState } from "react";

function UserCards(props) {
  const { users, setUsers } = useContext(Card);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const deleteItems = () => {
    setUsers(
      users.filter((user) => {
        return user.check === false;
      })
    );
  };
  const toggleSelect = (e) => {
    setUsers(
      users.map((user) => {
        return {
          name: user.name,
          family: user.family,
          phoneNumber: user.phoneNumber,
          idNo: user.idNo,
          birthDate: user.birthDate,
          address: user.address,
          profilePic: user.profilePic,
          id: user.id,
          check: e.target.checked,
          status: user.status,
        };
      })
    );
  };
  return (
    <div className="App">
      <div className="container">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {users.length > 0 && (
          <div className="container__div__select-and-delete">
            <input
              type="checkbox"
              value="salam"
              className="container__div__select-and-delete__select-all"
              onChange={toggleSelect}
            />
            {users.filter((user) => user.check)[0] && (
              <button
                onClick={deleteItems}
                className="container__div__select-and-delete__delete"
              />
            )}
          </div>
        )}
        {users
          .filter((user) => user.check)
          .map((user, index) => {
            return (
              <IdentityCard
                user={user}
                key={index}
                setUsers={setUsers}
                users={users}
                checked={true}
              />
            );
          })}
        {searchValue !== ""
          ? users
              .filter((user) => {
                return (
                  !user.check && user.name.toLowerCase().includes(searchValue)
                );
              })
              .map((user, index) => {
                return (
                  <IdentityCard
                    user={user}
                    key={index}
                    setUsers={setUsers}
                    users={users}
                    checked={false}
                  />
                );
              })
          : users
              .filter((user) => !user.check)
              .map((user, index) => {
                return (
                  <IdentityCard
                    user={user}
                    key={index}
                    setUsers={setUsers}
                    users={users}
                    checked={false}
                  />
                );
              })}
        <div>
          <button onClick={() => navigate("/add")} className="button-add">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCards;
