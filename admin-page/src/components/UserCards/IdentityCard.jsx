import React from "react";
import { Link } from "react-router-dom";

function IdentityCard(props) {
  const changeCheck = (e) => {
    props.setUsers(
      props.users.map((userr) => {
        return userr.id === props.user.id
          ? {
              name: userr.name,
              family: userr.family,
              phoneNumber: userr.phoneNumber,
              idNo: userr.idNo,
              birthDate: userr.birthDate,
              address: userr.address,
              profilePic: userr.profilePic,
              id: userr.id,
              check: e.target.checked,
              status: userr.status,
            }
          : userr;
      })
    );
  };
  return (
    <div className={props.checked ? "card checked-card" : "card"}>
      <div className="profile-picture">
        <img
          src={props.user.profilePic}
          className="profile-picture__img"
          alt="profile"
        ></img>
      </div>
      <div className="card__titles">
        <p>ٔName:</p>
        <p>Family Name:</p>
        <p>Birth Date</p>
        <p>ID NO.</p>
        <div
          className={
            props.user.status
              ? "card__status card__status--active"
              : "card__status card__status--inactive"
          }
        ></div>
      </div>
      <div className="card__values">
        <p>{props.user.name}</p>
        <p>{props.user.family}</p>
        <p>{props.user.birthDate}</p>
        <p>{props.user.idNo}</p>
      </div>
      <div className="card__changes">
        <Link to={`/edit/${props.user.id}`}>
          <button className="card__changes__edit" />
        </Link>

        <input
          type="checkbox"
          checked={props.user.check ? true : false}
          onChange={changeCheck}
        />
      </div>
      {!props.user.status && (
        <Link to={`/check/${props.user.id}`}>
          <button className="btn btn-blue card__changes__check">check</button>
        </Link>
      )}
    </div>
  );
}

export default IdentityCard;
