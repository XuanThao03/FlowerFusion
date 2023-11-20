import React from "react"
import styles from "./logininput.module.scss"
const LoginInput = () => {
    return ( 
        <div className=" align-middle">
            <h1 className="text-2xl font-medium text-main-color mt-8 ">Login</h1>
            <p className="text-xs font-light text-argent mt-3.5">Login to your account</p>
            <div className="text-xs font-light text-grey-main">
                <input
                className="w-72 border-[1px] boder-gainsboro rounded-md h-11 p-4 mt-12 bg-transparent"
                placeholder="Email"/>
            </div>
            <div className="text-xs font-light text-grey-main">
                <input
                className="w-72 border-[1px] border-0.5 boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
                placeholder="Password"
                type="password"/>
            </div>
            <div className="text-xs font-light text-main-color mt-2">
                <button className="underline">Forgot password?</button>
            </div>
        </div>

    );

}

export default LoginInput;