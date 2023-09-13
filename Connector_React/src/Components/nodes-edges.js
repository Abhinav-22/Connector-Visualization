import { MarkerType } from "reactflow";
export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "node 2" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2a",
    data: { label: "node 2a" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2b",
    data: { label: "node 2b" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2c",
    data: { label: "node 2c" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2d",
    data: { label: "node 2d" },
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    data: { label: "node 3" },
    position: { x: 200, y: 0 },
  },
  {
    id: "4",
    data: { label: "node 4" },
    position: { x: 200, y: 0 },
  },
];

export const initialEdges = [
  {
    id: "e12",
    source: "1",
    target: "2",
    label: "nodeee11",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 30,
      color: "#FF0072",
    },
  },
  {
    id: "e13",
    source: "1",
    target: "3",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#FF0072",
    },
  },
  {
    id: "e22a",
    source: "2",
    target: "2a",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#FF0072",
    },
  },
  {
    id: "e22b",
    source: "2",
    target: "2b",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#FF0072",
    },
  },
  {
    id: "e22c",
    source: "2",
    target: "2c",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#FF0072",
    },
  },
  {
    id: "e2c2d",
    source: "2c",
    target: "2d",
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#FF0072",
    },
  },
];
