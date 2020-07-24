import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mac from "./components/Mac";
import Ipad from "./components/iPad";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <Mac path="/mac" />
        <Ipad path="/ipad" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
