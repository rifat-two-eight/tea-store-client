import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
