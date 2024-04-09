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



// import React, { Component } from 'react';
// import Total from './Total'

// class ContentRowMovies extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             api1: "",
//             api2: ""
//         };
//     }

//     async componentDidMount() {
//         try {
//             const [api1Response, api2Response, api3Response] = await Promise.all([
//                 fetch('http://localhost:4000/api/usuarios'),
//                 fetch('http://localhost:4000/api/productos'),
//                 fetch('http://localhost:4000/api/categorias')
//             ]);
//             const api1Data = await api1Response.json();
//             const api2Data = await api2Response.json();
//             const api3Data = await api3Response.json();
            
//             console.log(api1Data);
//             console.log(api2Data);
//             console.log(api3Data);
    
//             this.setState({ 
//                 totalUsuarios: api1Data.meta.total,
//                 totalProductos: api2Data.meta.total,
//                 totalCategoria: api3Data.meta.total
//             });
//         } catch (error) {
//             console.log('Error fetching data:', error);
//         }
//     }

//     render() {
//         const { totalUsuarios, totalProductos, totalCategoria } = this.state;
//         return (
//             <>
//             <Total 
//             nombre = "Productos"  
//             total={totalProductos}
//             colorBorder = "primary"
//             titulo = "film"
            
//             />
//             <Total 
//             nombre = "Usuarios"  
//             total={totalUsuarios}  
//             colorBorder = "success"
//             titulo = "award"
//             />
//             <Total 
//             nombre = "Categorias"  
//             total={totalCategoria}
//             colorBorder = "warning"  
//             titulo = "user"
//             />
//             </>
//         );
//     }
// }

// export default ContentRowMovies;

// export const ContentRowMovies = (props) => {
//     return (
//         <>
//             <Total
//             />
//             <div className="row">

//                 {/* <!-- Total Productos --> */}
//                 <div className="col-md-4 mb-4 #">

//                     <div className="card border-left-primary shadow h-100 py-2">
//                         <div className="card-body #">
//                             <div className="row no-gutters align-items-center #">
//                                 <div className="col mr-2 #">

//                                     <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Productos</div>
//                                     <div className="h5 mb-0 font-weight-bold text-gray-800 #">21</div>
//                                 </div>
//                                 <div className="col-auto #">

//                                     <i className="fas fa-film fa-2x text-gray-300"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <!-- Total de Usuarios --> */}
//                 <div className="col-md-4 mb-4">
//                     <div className="card border-left-success shadow h-100 py-2">
//                         <div className="card-body">
//                             <div className="row no-gutters align-items-center">
//                                 <div className="col mr-2">
//                                     <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total Usuarios</div>
//                                     <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
//                                 </div>
//                                 <div className="col-auto">
//                                     <i className="fas fa-award fa-2x text-gray-300"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <!-- Total Categorias --> */}
//                 <div className="col-md-4 mb-4">
//                     <div className="card border-left-warning shadow h-100 py-2">
//                         <div className="card-body">
//                             <div className="row no-gutters align-items-center">
//                                 <div className="col mr-2">
//                                     <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Categorias
//                                     </div>
//                                     <div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
//                                 </div>
//                                 <div className="col-auto">
//                                     <i className="fas fa-user fa-2x text-gray-300"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
