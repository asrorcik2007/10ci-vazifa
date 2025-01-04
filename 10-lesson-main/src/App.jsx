import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/createUser/Create";
import Users from "./components/users/Users";
import Layout from "./components/layout/Layout";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={<Create setUsers={setUsers} />} />
          <Route path="users" element={<Users users={users} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
