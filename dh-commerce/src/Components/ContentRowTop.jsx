import React from 'react'
import ContentRowMovies from './ContentRowMovies'
import LastMovieinDB  from './LastMovieinDB'
import  GenresinDB   from './GenresinDB'

export const ContentRowTop = () => {
  return (
    <>
    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                           
                        </div>

                        {/* <!-- Content Row Movies--> */}
                        <ContentRowMovies />
                        {/* <!-- End movies in Data Base --> */}


                        {/* <!-- Content Row Last Movie in Data Base --> */}
                        <div className="row">
                            {/* <!-- Last Movie in DB --> */}
                            <LastMovieinDB />
                            {/* <!-- End content row last movie in Data Base --> */}
                            <GenresinDB />
                            {/* <!-- Genres in DB --> */}
                            
                        </div>
                    </div>
    </>
  )
}
