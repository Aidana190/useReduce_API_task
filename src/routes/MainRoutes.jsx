import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Details from "../components/Details";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
