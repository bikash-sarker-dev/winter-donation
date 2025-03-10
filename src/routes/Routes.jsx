import React from "react";
import { Route, Routes as Routers } from "react-router";
import RootLayout from "../layouts/RootLayout";
import DashboardPage from "../Pages/DashboardPage";
import DonationCampainsPage from "../Pages/DonationCampainsPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const Routes = () => {
  return (
    <>
      <Routers>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/all-donation-campaigns"
            element={<DonationCampainsPage />}
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routers>
    </>
  );
};

export default Routes;
