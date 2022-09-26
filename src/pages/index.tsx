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
  const [loading, setLoading] = useState<boolean | undefined>(true);
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
            return response.data.user;
          }
          throw new Error("authentication failed");
        })
        //add user state
        .then((resObject: User) => {
          setUser(resObject);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false)
        });
    };
    getUser();
  }, []);

  const Home = () => {
    return (
      <div>This is the home page</div>
    )
  }

  const Loading = () =>{
    return (
      <div>Loading page</div>
    )
  }

  return (
    <HashRouter>
      <Layout user={user}>
        <Routes>
          <Route
            path="/login"
            element={loading ? <Loading/> : (!user ? <Login /> : <Navigate to="/" />)}
          ></Route>
          <Route
            path="/"
            element={loading ? <Loading/> : (!user ? <Navigate to="/login"/> : <Home/>)}
          ></Route>
          <Route
            path="/newrecipe"
            element={loading ? <Loading/> : (user ? <NewRecipe /> : <Navigate to="/login" />)}
          ></Route>
          <Route
            path="/profile"
            element={loading ? <Loading/> : (user ? <Profile /> : <Navigate to="/login" />)}
          ></Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default Index;
