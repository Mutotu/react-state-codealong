import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("blue");
  const colorChanger = (c) => {
    setColor(c);
  };
  return (
    <>
      <div className={`box ${color} `} />
      <div className='buttons-container'>
        <button onClick={colorChanger("red")}>Red</button>
        <button onClick={colorChanger("blue")}>Blue</button>
        <button onClick={colorChanger("green")}>Green</button>
      </div>
    </>
  );
};

export default ColorChanger;
