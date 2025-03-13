import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode styling to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
