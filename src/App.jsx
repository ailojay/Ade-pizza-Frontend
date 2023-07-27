import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
const App = () => {
  return (
    <h1>
      <Navbar />
      <Homescreen />
    </h1>
  );
};

export default App;
