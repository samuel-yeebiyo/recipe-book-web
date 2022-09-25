import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { User } from "../components/UserContext";

import Login from "./login";
import NewRecipe from "./newrecipe";
import Profile from "./profile";

type GetLoginResponse = {
  data: User[];
};

const Index = () => {
  const [user, setUser] = useState<User | undefined>();
  // const [cookies, setCookies] = useCookies();
  // console.log(cookies);
  useEffect(() => {
    const getUser = () => {
      axios
        .get<GetLoginResponse>(
          `${process.env.REACT_APP_API_URI}/auth/login/success`,
          {
            withCredentials: true,
          }
        )
        //check response object
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            // console.log(response.data.user);
            return response.data.user;
          }
          throw new Error("authentication failed");
        })
        //add user state
        .then((resObject: User) => {
          // console.log(resObject);
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
      <Layout user={user}>
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/"
            element={!user ? <Login /> : <Navigate to="/" />}
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
      </Layout>
    </HashRouter>
  );
};

export default Index;
