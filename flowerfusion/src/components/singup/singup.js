import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'mongodb+srv://FirstUser:userpassword123@flowerfusion0.goo2ylu.mongodb.net/?retryWrites=true&w=majority',
        {name, email, password},
      )
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };
  return (
    <div className=" align-middle flex flex-col items-center ">
      <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-8 ">
        Sign up
      </h1>
      <p className="text-xs font-medium font-lexend text-argent mt-3.5">
        Create your new account
      </p>
      <form onSubmit={handleSubmit}>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] font-[Lexend] boder-gainsboro rounded-md h-11 p-4 mt-12 bg-transparent"
            placeholder="Firstname"
            onChange={e => setName(e.target.value)}
          />
        </div>
        {/* <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
          placeholder="Lastname"
        />
      </div> */}

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <NavLink to="/myaccount" exact={true} className="mt-9">
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
            Sign up
          </button>
        </NavLink>
      </form>
    </div>
  );
}
export default Signup;
