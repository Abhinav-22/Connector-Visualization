import React, { useEffect, useState } from "react";
import Mermaid from "./Mermaid";
import { ConnectorRoutes } from "./ConnectorRoutes";
import { connectorData } from "./Connectors";
import mermaid from "mermaid";

const App = () => {
  const [flowchart, setFlowChart] = useState();

  useEffect(() => {
    clicked();
  }, []);

  function generateConnMap(routeList) {
    const routeMap = new Map();

    routeList.forEach((route) => {
      routeMap.set(
        route.incon + "|" + route.inmsg,
        route.outcon + "|" + route.outmsg
      );
    });
    console.log("routelis", routeMap);

    return routeMap;
  }

  function getInCon(key) {
    return key[0];
  }

  function getOutCon(value) {
    return value[0];
  }

  function getInMsg(value) {
    return value[2];
  }

  function getOutMsg(key) {
    return key[2];
  }

  const createFlowchart = (listVal) => {
    let head = "A|1";
    // let str = `flowchart LR \n`;

    listVal.forEach((val, key) => {
      if (key == head) {
        console.log("same key");
        // str += `A-->B`;
      }
    });
    mermaid.initialize({
      startOnLoad: true,
    });
    let str = `
    flowchart LR
    A-->B
    `;
    return str;
  };

  const clicked = (event) => {
    let listVal;
    // console.log(event.target.value);

    listVal = generateConnMap(ConnectorRoutes);
    // createFlowchart(listVal);
    setFlowChart(createFlowchart(listVal));
    // window.location.reload();
    mermaid.contentLoaded();
  };

  return (
    <div>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary underline text-center">
        Diagram
      </h1>
      <div className="flex mt-10">
        <div className=" pl-24 pt-4 w-1/2 h-screen bg-slate-100">
          <button
            value="1"
            className="mb-12 mx- bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={clicked}
          >
            button1
          </button>
        </div>{" "}
        {/* <div dangerouslySetInnerHTML={{ __html: flowchart }} /> */}
        <Mermaid chart={flowchart} />
      </div>
    </div>
  );
};
export default App;
