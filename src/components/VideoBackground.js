import React, { useEffect, useState } from 'react'

import { API_OPTIONS } from '../utils/constants'


const VideoBackground = ({ movieId }) => {


    const [trailerId, setTrailerId] = useState(null);


    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/929590/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        // const trailer = json.results.filter((video) => video.name === "Official Final Trailer");
        const trailer = json.results.find((video) => video.name === "Official Final Trailer");
        // console.log(trailer);
        setTrailerId(trailer.key);
        // dispatch(addTrailerVideo(trailer));
    };


    useEffect(() => {
        getMovieVideos();
    }, []);
    return (
        <div className>
            <iframe className='w-full aspect-video bg-black bg-opacity-50'
                src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBackground

