import React, { useState } from "react";

const ChatHead = () => {
  const [userInput, updateUserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}></div>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(e) => updateUserInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          value="Send"
          onClick={submitHandler}
        >
          Primary
        </button>
      </form>
    </div>
  );
};

export default ChatHead;
