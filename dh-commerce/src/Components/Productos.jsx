import React, { useState, useEffect} from 'react';

const Productos = ({ categoriaId, categoriaSeleccionada, mostrarProductos }) => {
    console.log(typeof(categoriaId));
    console.log(typeof (categoriaSeleccionada));
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("categoriaId:", categoriaId);
        const response = await fetch(`http://localhost:4000/api/productos?categoriaId=${categoriaId}`);
        const data = await response.json();
        setListaProductos(data.data);
        
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoriaId]);
  return (
    
    <div>
      <h5>Productos</h5>
      <ul>
      {categoriaId === categoriaSeleccionada && mostrarProductos && (
        listaProductos?.map(producto => (
          <li key={producto.idproducto}>
            <h6><strong>{producto.marca}</strong></h6>
            <p><strong>Tipo:</strong> {producto.tipo}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
          </li>
        ))
      )}
       
      </ul>
    </div>
  );
};

export default Productos;
