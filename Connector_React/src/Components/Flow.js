import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  MarkerType,
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
} from "reactflow";
import dagre from "dagre";

import { initialNodes, initialEdges } from "./nodes-edges.js";

import "reactflow/dist/style.css";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

// ------------------------------------------------------------------------------------------------------

const Flow = () => {
  const getLayoutedElements = (nodes, edges, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      // console.log(node.id, "ID");
      dagreGraph.setNode(node.id, {
        width: nodeWidth,
        height: nodeHeight,
      });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
      // console.log(node);
      return node;
    });

    return { nodes, edges };
  };

  const [apiVal, setApiVal] = useState([]);
  const [apiEdge, setEdgeVal] = useState([]);
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    apiVal,
    apiEdge
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  // const afterFetch = async () => {
  //   // const dataVal = { label: "hi" };
  //   const isHorizontal = true;
  //   dagreGraph.setGraph({ rankdir: "LR" });
  //   const position1 = { x: 0, y: 0 };
  //   await fetch("http://localhost:8080/connector/getAllConnectors")
  //     .then((val) => val.json())
  //     .then((data1) => {
  //       data1.forEach((content) => {
  //         content.data = { label: content.data };
  //       });
  //       data1.forEach((node) => {
  //         // console.log(node.id, "ID");
  //         dagreGraph.setNode(node.id, {
  //           width: nodeWidth,
  //           height: nodeHeight,
  //         });
  //       });
  //       dagre.layout(dagreGraph);

  //       data1.forEach((node) => {
  //         const nodeWithPosition = dagreGraph.node(node.id);
  //         node.targetPosition = isHorizontal ? "left" : "top";
  //         node.sourcePosition = isHorizontal ? "right" : "bottom";

  //         node.position = {
  //           x: nodeWithPosition.x - nodeWidth / 2,
  //           y: nodeWithPosition.y - nodeHeight / 2,
  //         };
  //         // console.log(node);
  //         // return node;
  //         setApiVal((prevnodes) => [...prevnodes, node]);
  //       });
  //     });

  //   await fetch("http://localhost:8080/routes")
  //     .then((val) => val.json())
  //     .then((res) => {
  //       const modifiedData = res.map((item) => ({
  //         id: item.id,
  //         source: item.source,
  //         target: item.target,
  //         style: {
  //           strokeWidth: 1,
  //           stroke: "#FF0072",
  //         },
  //         label: item.inmsg,
  //         markerEnd: {
  //           type: MarkerType.ArrowClosed,
  //           width: 10,
  //           height: 10,
  //           color: "#FF0072",
  //         },
  //       }));
  //       // console.log("RESSS", res);
  //       setEdgeVal(modifiedData);
  //     });
  // };

  const afterFetch = async () => {
    const isHorizontal = true;
    dagreGraph.setGraph({ rankdir: "LR" });

    // Fetch and process nodes
    const nodeResponse = await fetch(
      "http://localhost:8080/connector/getAllConnectors"
    );
    const nodeData = await nodeResponse.json();

    const updatedNodes = nodeData.map((content) => ({
      id: content.id,
      data: { label: content.data },
    }));

    updatedNodes.forEach((node) => {
      dagreGraph.setNode(node.id, {
        width: nodeWidth,
        height: nodeHeight,
      });
    });

    dagre.layout(dagreGraph);

    updatedNodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    });

    // Fetch and process edges
    const edgeResponse = await fetch("http://localhost:8080/routes");
    const edgeData = await edgeResponse.json();

    const updatedEdges = edgeData.map((item) => ({
      id: item.id,
      source: item.source,
      target: item.target,
      style: {
        strokeWidth: 1,
        stroke: "#FF0072",
      },
      label: item.inmsg,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "#FF0072",
      },
    }));

    setApiVal(updatedNodes);
    setEdgeVal(updatedEdges);
  };

  useEffect(() => {
    // console.log("InitialNodes : ", initialNodes);
    // console.log(typeof initialNodes, "typeInit");
    afterFetch();
  }, []);

  useEffect(() => {
    console.log("apival : ", apiVal);
    console.log(typeof apiVal, "typeAPIVaL");
    console.log("inside useEffect apiVal");
  }, [apiVal]);

  useEffect(() => {
    // console.log("APIedgeVal : ", apiEdge);
    // console.log(apiEdge, "hi");
    apiEdge.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre.layout(dagreGraph);
  }, [apiEdge]);

  return (
    <div>
      <br />
      <div style={{ width: "100%", height: "500px" }}>
        <ReactFlow
          nodes={apiVal}
          edges={apiEdge}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        >
          <Panel position="top-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={() => onLayout("TB")}
            >
              vertical layout
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onLayout("LR")}
            >
              horizontal layout
            </button>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
