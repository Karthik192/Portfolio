import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <Content />
    </>
  );
}

export default App;
