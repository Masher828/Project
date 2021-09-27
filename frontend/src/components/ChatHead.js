import React, { useState, useReducer } from "react";
import { Toast } from "react-bootstrap";

const data = [{ _id: "test1", messageBody: "Hi", from: "A", to: "B" }];

const reducer = (state, action) => {
  switch (action.type) {
    case "loadChats":
      return [...state, newData(action.payload.body)];
    default:
      return state;
  }
};

const newData = (body) => {
  return {
    _id: Date.now().toString(),
    messageBody: body,
    from: "A",
    to: "B",
  };
};

const ChatHead = () => {
  const [chats, dispatch] = useReducer(reducer, data);

  const [userInput, updateUserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "loadChats", payload: { body: userInput } });
  };

  const chat_display = chats.map((chat) => {
    return (
      <Toast key={chat._id} style={{ margin: "2px" }}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{chat.from}</strong>
          <small>{chat._id}</small>
        </Toast.Header>
        <Toast.Body>{chat.messageBody}</Toast.Body>
      </Toast>
    );

    //<div>{chat._id}</div>;
  });

  //console.log(chats);
  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}>{chat_display}</div>
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
