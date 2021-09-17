import logo from "./logo.svg";
import "./App.css";
import { generateColour } from "./generate_colour";

function App() {
  console.log(generateColour());
  return (
    <div
      className="App"
      style={{
        backgroundColor: generateColour(),
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
}

export default App;
