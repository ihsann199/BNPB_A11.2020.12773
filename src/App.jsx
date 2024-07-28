import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"; // Mengimpor React
import DisasterNavbar from "./DisasterNavbar";
import HomePage from "./HomePage";
import FeaturesPage from "./FeaturesPage";
import ContactPage from "./ContactPage";
import "./App.css";

const App = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <React.Fragment>
      <Router>
        <div className="navbar-container">
          <DisasterNavbar brand="Disaster Management" links={links} bgColor="dark" />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
