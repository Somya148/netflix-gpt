import React from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from "react-redux";
const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    return (
        <div className="flex justify-center align-center">
            <form className=" bg-black bg-opacity-90 absolute w-1/2 p-20 mt-60">
                <input type="text" placeholder={lang[langKey].gptSearchPlaceholder}
                    className="w-1/2 h-12 ml-20 p-5"
                ></input>
                <button className=" bg-red-600 text-white w-3/12 h-12"> {lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;
