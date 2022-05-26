import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/Navbar";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default Header;
