import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
