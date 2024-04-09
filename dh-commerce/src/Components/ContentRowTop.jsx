import React from 'react'
import Totales from './Totales'
import UltimoProductoCreado  from './UltimoProductoCreado'
import  ListadoDeCategorias   from './ListadoDeCategorias'

export const ContentRowTop = () => {
  return (
    <>
    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                           
                        </div>

                        {/* <!-- Content Row Movies--> */}
                        <Totales />
                        {/* <!-- End movies in Data Base --> */}


                        {/* <!-- Content Row Last Movie in Data Base --> */}
                        <div className="row">
                            {/* <!-- Last Movie in DB --> */}
                            <UltimoProductoCreado />
                            {/* <!-- End content row last movie in Data Base --> */}
                            <ListadoDeCategorias />
                            {/* <!-- Genres in DB --> */}
                            
                        </div>
                    </div>
    </>
  )
}
