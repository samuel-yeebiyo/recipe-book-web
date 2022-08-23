import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import NewRecipe from "./newrecipe";

const index = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/newrecipe" element={<NewRecipe />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default index;
