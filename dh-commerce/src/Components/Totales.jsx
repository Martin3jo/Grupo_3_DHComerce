import React, { useState, useEffect } from 'react';
import Total from './Total';

const Totales = () => {
    const [totalUsuarios, setTotalUsuarios] = useState(0);
    const [totalProductos, setTotalProductos] = useState(0);
    const [totalCategoria, setTotalCategoria] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [api1Response, api2Response, api3Response] = await Promise.all([
                    fetch('http://localhost:4000/api/usuarios'),
                    fetch('http://localhost:4000/api/productos'),
                    fetch('http://localhost:4000/api/categorias')
                ]);
                const [api1Data, api2Data, api3Data] = await Promise.all([
                    api1Response.json(),
                    api2Response.json(),
                    api3Response.json()
                ]);
                
                console.log(api1Data);
                console.log(api2Data);
                console.log(api3Data);
        
                setTotalUsuarios(api1Data.meta.total);
                setTotalProductos(api2Data.meta.total);
                setTotalCategoria(api3Data.meta.total);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className='d-inline-flex container-fluid'>
            <Total 
                nombre="Productos"  
                total={totalProductos}
                colorBorder="primary"
                titulo="box"
            />
            <Total 
                nombre="Usuarios"  
                total={totalUsuarios}  
                colorBorder="success"
                titulo="user"
            />
            <Total 
                nombre="Categorias"  
                total={totalCategoria}
                colorBorder="warning"  
                titulo="list"
            />
        </div>
    );
};

export default Totales;




