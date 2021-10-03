import React from "react";
import ConversationScreen from "./ConversationScreen";
import Contacts from "./Contacts";

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
      <div className="w-2/12 bg-gray-200"></div>
    </div>
  );
};

export default Main;
