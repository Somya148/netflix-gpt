import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className="px-6 ">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
            <div className='flex overflow-x-auto overflow-y-hidden no-scrollbar'>
                <div className='flex space-x-4'>

                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}

                </div>
            </div>
        </div>
    )
}

export default MovieList
