import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import NewRecipe from "./newrecipe";
import Profile from "./profile";

type ServerData = {
  data: JSON;
};
const Index = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      axios
        .get("http://localhost:8008/auth/login/success", {
          withCredentials: true,
        })
        .then((response: AxiosResponse<ServerData>) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Response", response);
            return response.json;
          }
          throw new Error("authentication failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/newrecipe"
          element={user ? <NewRecipe /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </HashRouter>
  );
};

export default Index;
