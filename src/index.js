import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/login";
import Sign from "./sign-up/sign";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/Home" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
