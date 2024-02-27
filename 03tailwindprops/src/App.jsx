import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-color-gree-400">Hii</h1>
      <Cards username="Sarthak" />
      <Cards username="Harsh" />
      <Cards username="Divya" />
    </>
  );
}

export default App;
