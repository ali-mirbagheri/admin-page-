import React from "react";

function Informs({ label, value, status }) {
  return (
    <div className="informs__div">
      <p className="informs__div__label">{label}</p>
      <p className="informs__div__value">{value}</p>
      <div className="informs__div__buttons">
        <button
          className="decline"
          onClick={() => {
            status(false);
          }}
        />
        <button
          className="accept"
          onClick={() => {
            status(true);
          }}
        />
      </div>
    </div>
  );
}

export default Informs;
