import React from "react";
import ConversationScreenActon from "./ConversationScreenActon";
import ConversationScreenHeader from "./ConversationScreenHeader";
import ConversationChats from "./ConversationChats";

const ConversationScreen = () => {
  return (
    <>
      <ConversationScreenHeader />

      <div className="flex flex-row h-full w-full">
        <div className="flex flex-col h-full w-full p-2">
          <div className="h-full flex flex-col w-full bg-red-200">
            <ConversationChats />
          </div>
          <ConversationScreenActon />
        </div>
      </div>
    </>
  );
};

export default ConversationScreen;
