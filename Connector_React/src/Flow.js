import React from "react";
import Mermaid from "./Mermaid";

const App = () => {
  const chartDefinition = `
  graph LR
    A[message1]-->B(connector)
    B-->C[message2]
  `;
  return (
    <div>
      <h1>Diagram</h1>
      <Mermaid chart={chartDefinition} />
    </div>
  );
};
export default App;
