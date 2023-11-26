import React from "react";

function ChangePw() {
  return (<div>
  <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
    CHANGE PASSWORD
  </h1>
  <p className="text-xs font-[Lexend] font-medium text-grey-main mt-[10px]">
  To ensure security please set a password with at least 8 characters
</p>
<div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="Old password"
        />
      </div>
     
      <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="New password"
        />
      </div>
      <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="Confirm new password"
        />
      </div>
      <div className="mt-9">
        
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-regular">
            Reset password
          </button>
       
      </div>
</div> );
};

export default ChangePw;
