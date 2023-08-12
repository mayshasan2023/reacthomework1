import React from "react";
import "./styles.css";
import Childpage from "./components/Childpage";
function App() {
  console.log("Hello from main page , I am the parent of this page :D !");
  console.log("Hello from main page , I am the child of this page :D !");
  return (
    <div className="App">
      <h1> This is Mays Hasan from the main page </h1>
      <Childpage />
    </div>
  );
}
export default App;
