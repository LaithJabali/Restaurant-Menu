import React from "react";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LocationPage from "./components/pages/LocationPage/LocationPage";
import { LanguageProvider } from "./components/LanguageButton/LanguageContext";
import DishDetail from "./components/DishList/DishDetail";
import AdminMenu from "./components/AdminMenu/AdminMenu";
import  "./App.css";

const App = () => (
  <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<div><HomePage /></div>} />
        <Route path="/location/:location" element={<LocationPage />} />
        <Route path="/dish/:id" element={<DishDetail />} />
        <Route path="/admin" element={<AdminMenu />} />
      </Routes>
    </Router>
  </LanguageProvider>
);

export default App;