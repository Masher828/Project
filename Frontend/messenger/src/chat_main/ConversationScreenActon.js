import React from "react";
import { FiSend } from "react-icons/fi";

const ConversationScreenActon = () => {
  return (
    <>
      <div className="h-16 w-full  p-2 ">
        <form className="flex w-full">
          <input
            type="text"
            className="w-5/6  h-10 border-gray-300 border-solid border rounded-full p-3  "
            value="Type here.."
          />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 ml-2 rounded-full">
            <FiSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default ConversationScreenActon;
