import React from "react";
import { Route, Routes as Routers } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage";

const Routes = () => {
  return (
    <>
      <Routers>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routers>
    </>
  );
};

export default Routes;
