import { useRef, useState } from "react";
import "./App.css";
export const App = () => {
  const [color, currentColor] = useState("Dark");
  const [value, currentValue] = useState("true");
  const handleClick = () => {
    if (value) {
      currentValue(false);
      currentColor("LightMode");
      document.body.style.backgroundColor = "white";
    } else {
      currentValue(true);
      currentColor("DarkMode");
      document.body.style.backgroundColor = "#242424";
    }
  };
  const textColor = useRef(document.getElementsByClassName("TextColor"));
  return (
    <div className="mainDiv">
      <h1 className={color}>Toggle Button </h1>
      <button onClick={handleClick}>{color}</button>
    </div>
  );
};
