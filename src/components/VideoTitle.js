import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="px-20 py-80 absolute text-white bg-black bg-opacity-50 w-full aspect-video">
            <h1 className="font-semibold text-6xl">{title}</h1>
            <p className="w-1/2 pt-5 text-xl">{overview}</p>
            <div>
                <button className="bg-white text-black rounded-sm p-2 mt-5 font-semibold text-xl mr-4 w-36 hover:bg-slate-200">Play</button>

                <button className="bg-gray-500 text-white rounded-sm p-2 mt-5 font-semibold text-xl w-36 hover:bg-opacity-40">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
