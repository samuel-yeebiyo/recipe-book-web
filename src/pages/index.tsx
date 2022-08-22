import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";

const index = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default index;
