
import React, { useState, useEffect } from 'react';


export const LastMovieinDB = () => {
  const [UltimoProducto, setUltimoProducto] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/productos");
        const datos = await response.json();
        const productos = datos.data;
        const ultimoProductoCreado = productos[productos.length - 1];
        setUltimoProducto(ultimoProductoCreado);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!UltimoProducto) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="col-lg-6 mb-4 ">
        <div className="card shadow mb-4 ">
          <div className="card-header py-3 bg-gradient-light ">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Último producto creado
            </h5>
          </div>
          <div className="card-body  bg-gradient-info text-white">
            <div className="text-center">
          

              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4 bg-warning"
                style={{ width: "40rem" }}
                src={`http://localhost:4000/${UltimoProducto.avatar}`}
                alt={UltimoProducto.marca}
              />
            </div>
            <p>
                <strong >Marca:</strong> {UltimoProducto.marca}
              </p>
              <p>
                <strong>Tipo:</strong> {UltimoProducto.tipo}
              </p>
              <p>
                <strong>Precio:</strong> ${UltimoProducto.precio}
              </p>
              <p>
                <strong>Descripción:</strong> {UltimoProducto.descripcion}
              </p>
            {/* <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              Ver detalles del producto
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastMovieinDB;