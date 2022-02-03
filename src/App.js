import { useState } from "react";
import "./App.css";
import ColorChanger from "./components/ColorChanger";
import Counter from "./components/Counter";
function App() {
  const [showing, setShowing] = useState("counter");

  return (
    <div className='container'>
      <nav>
        <span onClick={ColorChanger}>Color Changer</span>
        <span>||</span>
        <span onClick={Counter}>Counter</span>
      </nav>

      {showing === "counter" ? (
        <>{setShowing(<Counter />)}</>
      ) : (
        <ColorChanger />
      )}
    </div>
  );
}

export default App;
