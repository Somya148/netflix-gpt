import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-36 md:w-48 pr-4'>

            <img className='rounded-md'
                alt="movie-name"
                src={IMG_CDN_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard
