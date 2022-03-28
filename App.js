import React from "react";
import { Person } from "./components/Person";
import { ClickCounter } from "./components/ClickCounter";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/Fallback";

function App() {
  const person = {
    firstName: "Ratan",
    lastName: "Tata",
  };
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };
  throw new Error("Hello World");
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={person} />
        {/* <Person person={{}} /> */}
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
