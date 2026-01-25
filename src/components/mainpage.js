import React, { useState } from "react";
import "./mainpage.css";

const MainPage = () => {
    const [display, setDisplay] = useState("Hello my love ❤️");
  return (
    <div className="container">
      <h1 className="main-text">{display}</h1>
      <button className="main-button">Click Me</button>
    </div>
  );
};

export default MainPage;