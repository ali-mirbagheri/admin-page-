import React from "react";

function Input({ label, inputValue, setAtt, type }) {
  return (
    <div className="form__input-div">
      <label className="form__input-div__label">{label}</label>
      <input
        type={type}
        className="form__input-div__input"
        value={inputValue}
        onChange={(e) => setAtt(e.target.value)}
      />
    </div>
  );
}

export default Input;
