import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import './assets/Icons';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
