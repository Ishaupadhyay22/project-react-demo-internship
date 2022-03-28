import React from "react";
import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const MAX_COUNT_ALOOWED = 5;

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const handlerError = useErrorHandler();

  const handleClick = () => {
    try {
      if (count === MAX_COUNT_ALOOWED) {
        throw new Error("Count limit Exceeded");
      } else {
        setCount((c) => c + 1);
      }
    } catch (e) {
      handlerError(e);
      //console.log("Clickcounter error", e);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Counter {count}</button>
    </div>
  );
};
