import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorld />;
}

function HelloWorld() {
  const name = "World";
  return <h1>Hello {name}!!!!!</h1>;
}
