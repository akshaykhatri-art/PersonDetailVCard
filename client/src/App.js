import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonPage from "./components/PersonPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/person/:id" element={<PersonPage />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
