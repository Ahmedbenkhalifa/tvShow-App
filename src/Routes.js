import React from "react";
import { Routes as RoutesRouter, Route } from "react-router-dom";
import Details from "./pages/Details";
import Search from "./pages/Search";

const Routes = () => {
  return (
    <>
      <RoutesRouter>
        <Route path="/" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
      </RoutesRouter>
    </>
  );
};

export { Routes };
