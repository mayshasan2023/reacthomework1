import React from "react";
import imagee from "./logo512.png";
const Childpage = () => {
  return (
    <div>
      <img className="image-container" src={imagee} alt="imagee" />
      <h1>This is Mays Hasan from component callining </h1>
      <img className="image-container" src={imagee} alt="imagee" />
    </div>
  );
};

export default Childpage;
