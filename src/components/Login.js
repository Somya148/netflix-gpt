import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        //validate the data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (!message) {
            if (!isSignInForm) {
                //Sign Up Logic

                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        // ...
                        updateProfile(user, {
                            displayName: name.current.value
                        }).then(() => {
                            // Profile updated!
                            // ...
                            // navigate("/browse");
                        }).catch((error) => {
                            // An error occurred
                            // ...
                            setErrorMessage(errorMessage);
                        });

                        console.log(user);
                        // navigate("./browse");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        setErrorMessage(errorCode + "-" + errorMessage);
                    });
            }
            else {
                //Sign in Logic
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        console.log(user);
                        // navigate("./browse");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode + "-" + errorMessage);
                    });
            }
        }



    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"></img>
            </div>
            <form className="bg-black bg-opacity-80 absolute w-3/12 my-40 mx-auto left-0 right-0"
                onSubmit={(e) => e.preventDefault()}>
                <h1 className="font-bold text-white m-10 text-4xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input ref={name} type="text" placeholder="Name" className="text-white ml-10 p-2 w-80 mb-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid" />)}

                <input ref={email} type="text" placeholder="Email or mobile number" className="ml-10 p-2 w-80 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid text-white">

                </input>
                <input ref={password} type="password" placeholder="Password" className="ml-10 p-2 w-80 mt-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid text-white"></input>

                <p className=" text-red-700 ml-10 p-2">{errorMessage}</p>
                <button className="ml-10 bg-red-600 text-white w-80 mt-5 p-2 font-semibold rounded-md mb-5 hover:bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <h1 className="text-white text-center">OR</h1>
                <h1 className="text-gray-400 text-center mb-10 mt-2 text-xl">New to Netflix? <span className="text-white font-bold hover:underline hover:cursor-pointer" onClick={toggleSignInForm}>Sign up now.</span></h1>

            </form>
        </div>
    )
}

export default Login


// import React, { useState, useRef } from 'react';
// import Header from './Header';
// import { checkValidData } from "../utils/Validate";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../utils/firebase';

// const Login = () => {
//     const [isSignInForm, setIsSignInForm] = useState(true);
//     const [errorMessage, setErrorMessage] = useState(null);

//     const email = useRef(null);
//     const password = useRef(null);

//     const handleButtonClick = () => {
//         // Validate the data
//         const message = checkValidData(email.current.value, password.current.value);
//         setErrorMessage(message);

//         if (message) return;

//         if (!isSignInForm) {
//             // Sign Up Logic
//             createUserWithEmailAndPassword(
//                 auth,
//                 email.current.value,
//                 password.current.value
//             )
//                 .then((userCredential) => {
//                     // Signed up 
//                     const user = userCredential.user;
//                     // ...
//                     console.log(user);
//                     console.log("Hello");
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     // ..
//                 });
//         } else {
//             // Sign-in logic here
//         }
//     };

//     const toggleSignInForm = () => {
//         setIsSignInForm(!isSignInForm);
//     }

//     return (
//         <div>
//             <Header />
//             <div className="absolute">
//                 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"></img>
//             </div>
//             <form className="bg-black bg-opacity-80 absolute w-3/12 my-40 mx-auto left-0 right-0" onSubmit={(e) => e.preventDefault()}>
//                 <h1 className="font-bold text-white m-10 text-4xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

//                 {!isSignInForm && (
//                     <input type="text" placeholder="Name" className="ml-10 p-2 w-80 mb-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid" autoComplete="name" />
//                 )}

//                 <input ref={email} type="text" placeholder="Email or mobile number" className="ml-10 p-2 w-80 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid text-white" autoComplete="email" />

//                 <input ref={password} type="password" placeholder="Password" className="ml-10 p-2 w-80 mt-5 bg-black opacity-80 rounded-md border-gray-500 border-2 border-solid text-white" autoComplete="current-password" />

//                 <p className="text-red-700 ml-10 p-2">{errorMessage}</p>
//                 <button className="ml-10 bg-red-600 text-white w-80 mt-5 p-2 font-semibold rounded-md mb-5 hover:bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
//                 <h1 className="text-white text-center">OR</h1>
//                 <h1 className="text-gray-400 text-center mb-10 mt-2 text-xl">New to Netflix? <span className="text-white font-bold hover:underline hover:cursor-pointer" onClick={toggleSignInForm}>Sign up now.</span></h1>
//             </form>
//         </div>
//     );
// }

// export default Login;
