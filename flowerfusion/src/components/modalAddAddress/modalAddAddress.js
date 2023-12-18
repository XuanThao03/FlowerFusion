import React from 'react';
const ModalAddNew = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[360px] w-[636px] max-w-5xl">
          <form method="dialog">
            {}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex mt-[20px]">
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="City"
            />
          </div>
          <div className="mt-[20px] ml-[415px]">
            <button className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Save
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default ModalAddNew;
