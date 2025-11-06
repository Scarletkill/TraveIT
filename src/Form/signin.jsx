import React, { useState } from "react";

const Signin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <div>
            <div>
                <button onClick={()=>setOpenModal(true)}
                    className="border border-gray-500 px-4 py-1 m-2">
                        Sign In
                </button>
            </div>
            {openModal && (
                <div>
                    <div className='fixed inset-0 m-10 z-10  w-screen flex justify-center items-center p-10'>
                        <div className="bg-white  w-[80%] min-h-screen flex flex-col justify-center items-center">
                            <div className="flex w-full justify-between p-4 m-4">
                                <h2 className="text-2xl">Modal Title</h2>
                                <button  className="bg-red-500 border border-red-500 text-white rounded px-4 py-1 transition-all ease-in-out hover:bg-green-500 hover:border-green-500 hover:text-black"
                                    onClick={()=>setOpenModal(false)}>
                                    X
                                </button>
                            </div>
                            <div className="">
                                <form className="flex flex-col max-w-md mx-auto  shadow space-y-4">
                                    <div className="grid grid-cols-1 gap-4 justify-center">
                                            <div className="flex">
                                                <label for='username'>
                                                    Username:
                                                </label>
                                                <input type='text' className="border border-gray-500 rounded" />
                                            </div>
                                            <div className="flex">
                                                <label for='password'>
                                                    Password:
                                                </label>
                                                <input type='password' className="border border-gray-500 rounded"/>
                                            </div>
                                            <div className=" justify-center items-center">
                                                <button className="border border-gray-700 px-4 m-4">
                                                    login
                                                </button>
                                            </div>
                                        
                                    </div>

                                </form>
                                <div className="justify-center items-center">
                                    <h1 className="text-color-blue">Forget Password</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Signin;
