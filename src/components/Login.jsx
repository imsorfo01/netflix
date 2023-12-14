import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "./utility/checkvalid";
import { auth } from "./utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { backgroundImage } from "./utility/constant";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [errorMessage, seterrorMessage] = useState(null);
  const [isSignIn, setisSignIn] = useState(true);
  const [signedUp, setsignedUp] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const formToggler = () => {
    setisSignIn(!isSignIn);
  };
  const handleClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    seterrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          // ...
          // console.log(user);
          setsignedUp(true);
          {
            setsignedUp &&
              seterrorMessage("✔️ You Have Successfully Signed Up");
          }
          document.querySelector(".errorMsg").style = "color: green";
          // navigate("/browse")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          seterrorMessage(message + "_" + errorCode);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          seterrorMessage(errorCode + "_" + message);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="md:absolute absolute">
        <img className="h-screen md:h-fit"
          src={backgroundImage}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white md: absolute  bg-gray-900 md:p-12 p-2 md:w-1/4 w-[200px] md:mt-40 mt-[48%] md:left-96 
          ml-[24%] auto md:ml-24  bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl mb-7 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div>
            <input
              ref={fullName}
              className="bg-gray-300 outline-none  px-3 text-black p-2 mb-2 w-full font-bold"
              type="text"
              placeholder="Enter FullName"
            />
          </div>
        )}
        <div className="text-black font-bold">
          <input
            ref={email}
            className="bg-gray-300 outline-none p-2 px-3 mb-2 w-full "
            type=" text"
            placeholder="Email Address"
          />
        </div>
        <div className="text-black">
          <input
            ref={password}
            className="bg-gray-300 px-3 outline-none p-2 mb-2 w-full"
            type="password"
            placeholder="Enter Password"
          />
          <p className="errorMsg text-sm font-bold text-red-500">
            {errorMessage}
          </p>
          {/* <p className='text-sm font-bold text-green-400'>{errorMessage}</p> */}
        </div>
        <button
          onClick={handleClick}
          className=" bg-red-600 w-full rounded-md mt-4 p-2"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={formToggler}>
          {isSignIn ? "New to Netflix? " : "Already Registered! "}
          <span className="text-red-500">
            {isSignIn ? "Sign Up Now!" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
}
