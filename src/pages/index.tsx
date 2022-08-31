import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import NewRecipe from "./newrecipe";
import Profile from "./profile";

type User = {
  avatarURL: string;
  displayName: string;
  id: string;
  provider: string;
  username: string;
};

type GetLoginResponse = {
  data: User[];
};

const Index = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = () => {
      console.log("getting user");
      axios
        .get<GetLoginResponse>("http://localhost:8008/auth/login/success", {
          withCredentials: true,
        })
        //check response object
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            return response.data.user;
          }
          throw new Error("authentication failed");
        })
        //add user state
        .then((resObject: User) => {
          setUser(resObject);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getUser();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
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
