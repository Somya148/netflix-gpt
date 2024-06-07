import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(
        (store) => store.movies.topRatedMovies
    );

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };


    useEffect(() => {
        if (!topRatedMovies) {
            getTopRatedMovies();
        }
    }, [topRatedMovies, getTopRatedMovies]);

    return topRatedMovies;
};

export default useTopRatedMovies;