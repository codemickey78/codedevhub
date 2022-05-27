import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PostSingle, About } from "../pages";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/post-details/:slug" element={<PostSingle />}></Route>
    </Routes>
  );
};

export default AllRoutes;
