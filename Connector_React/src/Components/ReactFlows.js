import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { ConnectorRoutes } from "./ConnectorRoutes";

import "reactflow/dist/style.css";

function ReactFlows() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // const [nodes, setNodes, onNodesChange] = useNodesState([]);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  function appendItemNode(item) {
    console.log("item", item);
    setNodes((prevnodes) => [...prevnodes, item]);
  }

  function appendDirection(item) {
    console.log("direction", item);
    setEdges((prevedges) => [...prevedges, item]);
  }

  const genRoutes = () => {
    let count = 0,
      xval = 50,
      yval = 100,
      xinc = 120,
      yinc = 50;

    ConnectorRoutes.forEach((value) => {
      // console.log(value.incon, value.inmsg, value.outcon, value.outmsg);
      let val1 = {
        id: value.incon,
        position: { x: xval, y: yval },
        data: { label: value.incon },
      };
      count++;
      xval = xval + xinc;
      yval = yval + yinc;

      appendItemNode(val1);

      let val2 = {
        id: value.outcon,
        position: { x: xval, y: yval },
        data: { label: value.outcon },
      };
      count++;
      xval = xval + xinc;
      yval = yval + yinc;
      appendItemNode(val2);

      let val3 = {
        id: "e" + value.incon + "-" + value.outcon,
        source: value.incon,
        target: value.outcon,
      };
      appendDirection(val3);
    });
  };

  useEffect(() => {
    genRoutes();
    // console.log("hii");
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        // edges={edges}
        onEdgesChange={onEdgesChange}

        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default ReactFlows;
