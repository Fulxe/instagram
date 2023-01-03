import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./home/home";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('uid');
    if (!id) navigate("/Sign");
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
