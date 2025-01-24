import React from "react";
import React, { useState } from "react";

const Color = () => {
  const [color, SetColor] = useState("black");
  return (
    <>
      <h1 style={{ color: color }}>My Favorite color is {color}!</h1>
      <button type="botton" onClick={() => SetColor("red")}>
        Red
      </button>
      <button type="botton" onClick={() => SetColor("blue")}>
        Blue
      </button>
      <button type="botton" onClick={() => SetColor("green")}>
        Green
      </button>
    </>
  );
};
export default Color;
