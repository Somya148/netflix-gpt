import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"></img>
            </div>
            <form className="bg-black bg-opacity-80 absolute w-3/12 my-40 mx-auto left-0 right-0">
                <h1 className="font-bold text-white m-10 text-4xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input type="text" placeholder="Name" className="ml-10 p-2 w-80 mb-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid" />)}

                <input type="text" placeholder="Email or mobile number" className="ml-10 p-2 w-80 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid">

                </input>
                <input type="password" placeholder="Password" className="ml-10 p-2 w-80 mt-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid"></input>
                <button className="ml-10 bg-red-600 text-white w-80 mt-5 p-2 font-semibold rounded-md mb-5 hover:bg-red-700">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <h1 className="text-white text-center">OR</h1>
                <h1 className="text-gray-400 text-center mb-10 mt-2 text-xl">New to Netflix? <span className="text-white font-bold hover:underline hover:cursor-pointer" onClick={toggleSignInForm}>Sign up now.</span></h1>

            </form>
        </div>
    )
}

export default Login
