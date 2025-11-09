import React, { useState } from "react";
import "../Components/Home/Home.css";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "@/Firebase/auth";
import {useAuth} from '../contexts/authContext'

const Signin = ({ closeModal }) => {
  const {userSignIn} = useAuth()
  const [isSignup, setIsSignup] = useState(false);
  const [phone, setPhone] = useState("");
  const [email,setemail] = useState("");
  const [error, setError] = useState("");

  const phonehandleChange = (e) => {
    const value = e.target.value;
    setPhone(value);

  
    const phoneRegex = /^\+?[0-9]\d{0,9}$/;
    if (!phoneRegex.test(value)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  };

  const emailhandleChange =(e) =>{
    const value = e.target.value;
    setemail(value);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSignup){
      setIsSignup(true)
      await doSignInWithEmailAndPassword(email,password)
    }
  }
  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if(!isSignup){
      setIsSignup(true)
      doSignInWithGoogle().catch(err => {
        setIsSignup(false)
      })
    }
  }


  return (
    <div className="fixed inset-0 z-50 bg-opacity-50">
      {userSignIn && (<Navigate to= {'/home'} replace={true}/>)}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">

        {/* Header */}
        <div className="flex w-full justify-between p-4 m-4">
          <h2 className="text-2xl">Modal Title</h2>
          <button
            className="bg-red-500 border border-red-500 text-white rounded px-4 py-1 transition-all ease-in-out hover:bg-green-500 hover:border-green-500 hover:text-black"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        {/* Conditional Form */}
        {isSignup ? (
          // Sign-in Form
          <form className="flex flex-col max-w-md mx-auto shadow space-y-4">
            <div className="grid grid-cols-1 justify-center gap-4">
              <div className="flex gap-4">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" className="border border-gray-500 rounded" />
              </div>
              <div className="flex gap-5">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" className="border border-gray-500 rounded" />
              </div>
              <div className="justify-center items-center">
                <button className="border border-gray-700 px-24 m-6 bg-orange-500 text-white rounded-2xl">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        ) : (
          // Sign-up Form
          <form className="flex flex-col max-w-md mx-auto shadow space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <label>
                  First Name:
                  <input type="text" className="border px-1 rounded" />
                </label>
                <label>
                  Middle Name:
                  <input type="text" className="border px-1 rounded" />
                </label>
              </div>

              <label>
                Last Name:
                <input type="text" className="border px-2 rounded" />
              </label>

              <label>
                Gmail Address:
                <input
                  type="email"
                  className="border px-2 rounded"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={emailhandleChange}
                  required
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="tel"
                  className="border px-2 rounded"
                  value={phone}
                  onChange={phonehandleChange}
                  required
                />
              </label>

              {error && <span className="text-red-500">{error}</span>}
            </div>
          </form>
        )}

        {/* Footer / Toggle */}
        <p className="text-sm mt-5 text-center">
          {isSignup ? "Don't have an account?" : ""}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 underline ml-1"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
