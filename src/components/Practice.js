import React from 'react'

const Practice = () => { 
    return (
        <div>
            <section className="movie-section">
                <div className="movie-card">
                        <img src={movie.Poster} alt="" />
                    <div className="card-content">
                        <p className="title">{movie.Title}</p>
                        <p className="card-text">{movie.Released}</p>
                        <p className="card-text">{movie.Genre}</p>
                        <p className="card-text">{movie.imdbRating}</p>
                        <p className="card-text">{movie.Country}</p>
                        <NavLink to="/" className="back-btn">Go Back</NavLink>
                    </div>
                </div>
            </section>
    </div >
  )
} 

export default Practice;
