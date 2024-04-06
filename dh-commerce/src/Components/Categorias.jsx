import React, { useState } from "react";
import Productos from "./Productos";

function Categorias(props) {
  console.log("Valor de categoriaSeleccionada:", props.categoriaSeleccionada);
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };
  return (
    <div
      className={`card bg-info text-white shadow cursor-pointer ${
        props.categoriaSeleccionada ? "border-primary" : ""
      }`}
    >
      <div className="card-body" onClick={toggleMostrarProductos}>
        <h6 className="m-0 font-weight-bold  text-white">{props.nombre}</h6>
        <p className="m-0 text-secondary cursor-pointer pointer">
          Cantidad de productos: {props.cantProd}
        </p>
        {mostrarProductos && (
          <div className="col-lg-12 mb-4">
            <Productos
              categoriaId={props.categoriaId}
              categoriaSeleccionada={props.categoriaSeleccionada}
              mostrarProductos={props.mostrarProductos}
              
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorias;
