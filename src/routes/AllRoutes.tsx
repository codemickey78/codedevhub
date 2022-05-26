import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PostSingle, About } from "../pages";
import Header from "../layouts/Header/Header";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="post-details/:slug" element={<PostSingle />}></Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
