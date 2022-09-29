// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Header />
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
