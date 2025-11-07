import React, { useState } from "react";
import '../Components/Home/Home.css';


const Signin = ({closeModal}) => {
  const[isSignup, setIsSignup] = useState(false);
  
  return (
    <>
    <div>
        <div className="fixed inset-0 z-50  bg-opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">
                <div className="flex w-full justify-between p-4 m-4">
                  <h2 className="text-2xl">Modal Title</h2>
                  <button  className="bg-red-500 border border-red-500 text-white rounded px-4 py-1 transition-all ease-in-out hover:bg-green-500 hover:border-green-500 hover:text-black"
                                    onClick={closeModal}>
                                    X
                                </button>
                            </div>
                            {isSignup ? (
                              //SigninForm
                              <form className="flex flex-col max-w-md mx-auto  shadow space-y-4">
                                    <div className="grid grid-cols-1 justify-center gap-4">
                                            <div className="flex gap-4">
                                                <label for='username'>
                                                    Username:
                                                </label>
                                                <input type='text' className="border border-gray-500 rounded" />
                                            </div>
                                            <div className="flex gap-5">
                                                <label for='password'>
                                                    Password:
                                                </label>
                                                <input type='password' className="border border-gray-500 rounded"/>
                                            </div>
                                            <div className="justify-center items-center">
                                              <button className="border border-gray-700 px-24 m-6 bg-orange-500 text-white rounded-2xl">
                                                 Sign In
                                              </button>
                                             </div>
                                      </div>
                                </form>):(
                                  <form>
                                    <div>
                                      <label>
                                        First Name: 
                                      </label>
                                      <input type="Text" className="border px-2 rounded"/>
                                    </div>
                                  </form>

                            
                            )}
                            <p className="Text-sm mt-5 text-center">
                              {isSignup? "Doesn't have account?":" "}
                              <button onClick={()=>setIsSignup(!isSignup)} className="text-blue-500 underline ml-1">
                                {isSignup? "Sign Up" : "Sign Up"}
                              </button>
                            
                            </p>

        
                                  
                            
              </div>
        </div>
    </div>
    </>
          
  );
};

export default Signin;
