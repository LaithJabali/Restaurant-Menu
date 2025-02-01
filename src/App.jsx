import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LocationPage from "./components/pages/LocationPage/LocationPage";
import { LanguageProvider } from "./components/LanguageButton/LanguageContext";
import  "./App.css";

const App = () => (
  <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<div><HomePage /></div>} />
        <Route path="/location/:location" element={<LocationPage />} />
      </Routes>
    </Router>
  </LanguageProvider>
);

export default App;