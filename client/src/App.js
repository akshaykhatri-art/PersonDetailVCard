import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonPage from "./components/PersonPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="/" element={<HomePage />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
