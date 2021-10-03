import React from "react";
import ConversationScreen from "./ConversationScreen";
import Contacts from "./Contacts";
import DropDownUser from "./DropDownUser";

const Main = () => {
  return (
    <div className="flex h-screen">
      <div className="flex w-3/12 bg-gray-200">
        <div className="w-3/12 mt-2 ml-2 mb-2  bg-green-300 rounded-lg"></div>
        <div className="w-9/12 mt-2 mr-2 mb-2 p-1 bg-gray-200">
          <h1 className="font-bold text-2xl mb-2">Messages</h1>

          <Contacts />
        </div>
      </div>
      <div className="flex flex-col w-7/12   h-screen ">
        <ConversationScreen />
      </div>
      <div className="flex flex-col w-2/12 ">
        <div className="h-1/6 w-full bg-white p-4">
          <div className="flex">
            <div className=" h-18 w-10 mr-2 object-cover object-center rounded-full ">
              <img
                className="object-contain rounded-full"
                src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
              />
            </div>
            <DropDownUser />
          </div>
        </div>
        <div className="h-5/6 w-full bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Main;
