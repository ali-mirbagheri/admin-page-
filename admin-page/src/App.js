import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCards from "./components/UserCards";
import Add from "./components/Add";
import Check from "./components/Check";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/add" element={<Add />} />
        <Route path="/check/:id" element={<Check />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
