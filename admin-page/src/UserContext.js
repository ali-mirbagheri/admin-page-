import React, { createContext } from "react";

const UsersContext = createContext();
const UsersUpdateContext = createContext();

const [users, setUsers] = useState([]);
const navigate = useNavigate();
const addItem = (obj) => {
  console.log("slkdjflkj");
  setUsers((pre) => {
    return [...pre, { name: obj.name, family: obj.family }];
  });
  navigate("/");
};

export const UserContext = createContext();
