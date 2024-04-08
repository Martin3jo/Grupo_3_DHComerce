import React, { useState } from "react";
import Productos from "./Productos";

function Categorias(props) {
  
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };
  return (
    <div
      className={`card bg-info text-white shadow cursor-pointer `}
    >
      <div className="card-body" onClick={toggleMostrarProductos}>
        <h6 className="m-0 font-weight-bold  text-dark">{props.nombre}</h6>
        <p className="m-0 text-secondary cursor-pointer pointer">
          Cantidad de productos: {props.cantProd}
        </p>
        {mostrarProductos && (
          <div className="col-lg-12 mb-4">
            <Productos
              categoriaId={props.categoriaId}
              
              
              
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorias;
