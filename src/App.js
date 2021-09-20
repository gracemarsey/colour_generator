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
      <div className="box" onClick={onBoxClick}>
        {colour}
      </div>
    </div>
  );
};

export default App;
