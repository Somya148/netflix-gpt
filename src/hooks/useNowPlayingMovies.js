import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    );

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;



// import { useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addNowPlayingMovies } from "../utils/moviesSlice";

// const useNowPlayingMovies = () => {
//     const dispatch = useDispatch();
//     const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

//     const getNowPlayingMovies = useCallback(async () => {
//         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
//         const json = await data.json();
//         console.log(json.results);
//         dispatch(addNowPlayingMovies(json.results));
//     }, [dispatch]);

//     useEffect(() => {
//         if (!nowPlayingMovies) {
//             getNowPlayingMovies();
//         }
//     }, [nowPlayingMovies, getNowPlayingMovies]);

//     return nowPlayingMovies;
// };

// export default useNowPlayingMovies;
