import React, { createContext, useState } from "react";

export const Card = createContext();
function Context({ children }) {
  const [users, setUsers] = useState([]);
  return <Card.Provider value={{ users, setUsers }}>{children}</Card.Provider>;
}

export default Context;
