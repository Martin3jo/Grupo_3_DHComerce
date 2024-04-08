import React, { useState, useEffect } from "react";

const Productos = ({ categoriaId }) => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("categoriaId:", categoriaId);
        const response = await fetch(`http://localhost:4000/api/categorias`);
        const data = await response.json();
        console.log(data.data);
        setListaProductos(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoriaId]);

  const productosCategoriaSeleccionada =
    listaProductos.find((categoria) => categoria.idcategoria === categoriaId)
      ?.Producto || [];
  return (
    <div>
      <h5 className="text-warning">Productos</h5>
      <div className="text-primary">
        <ul>
          {productosCategoriaSeleccionada.map((producto) => (
            <li key={producto.idproducto}>
              <h6>
                <strong>{producto.marca}</strong>
              </h6>
              <p>
                <strong>Tipo:</strong> {producto.tipo}
              </p>
              <p>
                <strong>Precio:</strong> ${producto.precio}
              </p>
              <p>
                <strong>Descripción:</strong> {producto.descripcion}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  {
  }
  {
  }
};

export default Productos;
