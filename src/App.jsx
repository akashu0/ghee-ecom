import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navabr/Navbar";
import Footer from "./components/navabr/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
