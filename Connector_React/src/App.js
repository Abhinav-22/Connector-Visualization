import "./App.css";
import Flow from "./Components/Flow";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import ReactFlows from "./Components/ReactFlows";
const firebaseConfig = {
  apiKey: "AIzaSyB6d4hcs0p_VWeouDlvj5qOWxduXR2iZZU",
  authDomain: "controller-81019.firebaseapp.com",
  projectId: "controller-81019",
  storageBucket: "controller-81019.appspot.com",
  messagingSenderId: "728555965409",
  appId: "1:728555965409:web:3ae3796a4c9a72c81fa0a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <ReactFlows />
    </>
  );
}

export default App;
