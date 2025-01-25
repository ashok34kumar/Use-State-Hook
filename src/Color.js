/*
React useEffect Hooks definition:
useState is a Hook that lets you add React state to function components. By calling this Hook, you can declare a state variable and a function to update it.
-----------------------------------------------------------------
Syntax:
const [state, setState] = useState(initialState);
-----------------------------------------
*/

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
