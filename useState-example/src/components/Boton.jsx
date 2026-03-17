import React from "react";

const Boton = ({label, onClick}) => {
  return (
    <div className="Box">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};
 
export default Boton;