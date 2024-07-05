import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Slider from "./components/Slider";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </div>
  );
}

export default App;
