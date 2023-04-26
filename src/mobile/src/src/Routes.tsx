import { Routes, Route } from "react-router-dom";
import PageShell from "./components/PageShell";
import Protected from "./components/Protected";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import React from "react";

export default function Router() {
  
  return (
    <div className="container">
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected />}>
          <Route element={<PageShell />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history">
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
