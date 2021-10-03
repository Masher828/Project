import React from "react";

const ConversationScreenHeader = () => {
  return (
    <>
      <div className="flex drop-shadow-2xl w-12/12  h-16 mt-2 ml-2 mr-2 rounded-lg bg-green-200 p-2 ">
        <div className=" h-18 w-10 mr-2 object-cover object-center rounded-full ">
          <img
            className="object-contain rounded-full"
            src="https://www.vhv.rs/dpng/d/426-4261485_free-user-avatar-icons-flat-customer-icon-png.png"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full ">
            <h3 className=" font-semibold self-start">Tacaz Kira</h3>
          </div>
          <div className="flex flex-row w-full ">
            <span className="text-sm mt-1 text-gray-400">Active Now</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationScreenHeader;
