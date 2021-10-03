import React from "react";

const Contacts = () => {
  return (
    <>
      <div className="flex w-full p-3 border-gray-300 border-solid border  border-t-0 border-l-0 border-r-0">
        <div className=" h-18 w-10 mr-2 object-cover object-center rounded-full ">
          <img
            className="object-contain rounded-full"
            src="https://www.vhv.rs/dpng/d/426-4261485_free-user-avatar-icons-flat-customer-icon-png.png"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full ">
            <h3 className=" font-semibold self-start">Ajay</h3>
            <h2
              className=" text-gray-400 text-sm self-end"
              style={{ marginLeft: "auto" }}
            >
              10hr ago
            </h2>
          </div>
          <div className="flex flex-row w-full ">
            <span className="text-sm mt-1">Hi there!</span>
            <span
              className=" text-xs mt-1 self-end p-1 bg-red-500 rounded-full text-white "
              style={{ marginLeft: "auto" }}
            >
              2
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full p-3 border-gray-300 border-solid border  border-t-0 border-l-0 border-r-0">
        <div className=" h-18 w-10 mr-2 object-cover object-center rounded-full ">
          <img
            className="object-contain rounded-full"
            src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full ">
            <h3 className=" font-semibold self-start">Manish</h3>
            <h2
              className=" text-gray-400 text-sm self-end"
              style={{ marginLeft: "auto" }}
            >
              2hr ago
            </h2>
          </div>
          <div className="flex flex-row w-full ">
            <span className="text-sm mt-1">Is it ready?!</span>
            <span
              className=" text-xs mt-1 self-end p-1 bg-red-500 rounded-full text-white "
              style={{ marginLeft: "auto" }}
            >
              5
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
