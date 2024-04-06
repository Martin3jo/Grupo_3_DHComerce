import React, { useState, useEffect } from "react";
import Categorias from "./Categorias";
import Productos from './Productos';

const GenresinDB = () => {
  const [Categoria, setTotalCategoria] = useState([]);
  const [productosCategoria, setProductosCategoria] = useState({});
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/categorias");
        const data = await response.json();
        console.log(data.data)
        setTotalCategoria(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoriaClick = async (categoriaId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/categorias/${categoriaId}/productos`
      );
      const data = await response.json();
      setProductosCategoria((prevProductosCategoria) => ({
        ...prevProductosCategoria,
        [categoriaId]: data.data.Producto
      }));
      setCategoriaSeleccionada(categoriaId);
      console.log("categoriaSeleccionada:", categoriaId)
        
      
    } catch (error) {
      console.log("Error fetching productos de la categoría:", error);
    }
  };
  console.log(categoriaSeleccionada)
  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Listado de Categorias
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Categoria?.map((categoria) => (
                <div key={categoria.idcategoria} className="col-lg-6 mb-4">
                  <Categorias
                    nombre={categoria.nombre}
                    cantProd={categoria.cantProd}
                    onClick={() => handleCategoriaClick(categoria.idcategoria)}
                   
                    categoriaId={categoria.idcategoria}
                    categoriaSeleccionada={categoriaSeleccionada}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GenresinDB;
