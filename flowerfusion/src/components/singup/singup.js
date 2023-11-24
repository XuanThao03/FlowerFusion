import React from "react";
const Signup = () => {
    return ( 
        <div className=" align-middle flex flex-col items-center ">
            <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-8 ">Sign up</h1>
            <p className="text-xs font-medium font-lexend text-argent mt-3.5">Create your new account</p>
            <div className="text-xs font-[Lexend] font-normal text-grey-main">
                <input
                className="w-72 border-[1.5px] font-[Lexend] boder-gainsboro rounded-md h-11 p-4 mt-12 bg-transparent"
                placeholder="Firstname"/>
            </div>
            <div className="text-xs font-[Lexend] font-normal text-grey-main">
            <input
                className="w-72 border-[1.5px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
                placeholder="Lastname"/>
            </div>
            
            <div className="text-xs font-[Lexend] font-normal text-grey-main">
            <input
                className="w-72 border-[1.5px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
                placeholder="Email"/>
            
            </div>

            <div className="text-xs font-[Lexend] font-normal text-grey-main">
            <input
                className="w-72 border-[1.5px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
                placeholder="Password"/>
            </div>

            <div className="mt-9" >
                <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-semibold" >Sign up</button>
            </div>
        </div>

    );
};
export default Signup;