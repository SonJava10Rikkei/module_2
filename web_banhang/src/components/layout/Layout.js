import React from "react";
import { Outlet } from "react-router-dom";

import { Footter } from "./Footter";
import Header from "./Header";
export const Layout = () => {
  return (
    <div className="container_gu__trend">
      <Header />
      <Outlet />
      <Footter />
    </div>
  );
};
