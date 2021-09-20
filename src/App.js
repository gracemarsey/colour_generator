import "./App.css";
import { generateColour } from "./generate_colour";
import { useState } from "react";

const App = () => {
  const [colour, setColour] = useState(generateColour());

  const onBoxClick = () => {
    setColour(generateColour());
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: colour,
      }}
    >
      <div className="box">{colour}</div>

      <div className="button" onClick={onBoxClick}>
        Click to generate colour
      </div>
    </div>
  );
};

export default App;
