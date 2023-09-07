import React, { useEffect, useState } from "react";
import Mermaid from "./Mermaid";
import { ConnectorRoutes } from "./ConnectorRoutes";
import { connectorData } from "./Connectors";

const App = () => {
  const [flowchart, setFlowChart] = useState("");

  const clicked = async () => {
    connectorData.map((connector) => {
      console.log(connector.id);
    });

    ConnectorRoutes.map((connector) => {
      console.log(
        connector.incon,
        connector.inmsg,
        connector.outcon,
        connector.outmsg
      );
    });
  };

  // useEffect(() => {});
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Diagram</h1>
      <button className="mb-12 border-solid border-sky-500" onClick={clicked}>
        button1
      </button>
      <Mermaid chart={flowchart} />
    </div>
  );
};
export default App;
