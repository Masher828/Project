import * as ActionType from "./actionType";

const messageDict = [
  { id: 1, from: 11, to: 12, body: "tt", time: "10:50pm", date: "1/11/2018" },
  { id: 2, from: 11, to: 12, body: "tt", time: "10:50pm", date: "1/11/2018" },
  //{ id: 3, from: 12, to: 11, body: "tt", time: "10:50pm", date: "1/11/2018" },
  //{ id: 4, from: 12, to: 11, body: "tt", time: "10:50pm", date: "1/11/2018" },
  //{ id: 5, from: 12, to: 11, body: "tt", time: "10:50pm", date: "1/11/2018" },
];

const initState = { isLoading: false, isError: false, messages: messageDict };

export const Message = (State = initState, action) => {
  switch (action.type) {
    case ActionType.GET_MESSAGES_REQUEST:
      return { ...State, isLoading: true, isError: false };

    case ActionType.GET_MESSAGES_SUCCESS:
      return { ...State, isLoading: false, messages: action.payload.messages };

    case ActionType.GET_MESSAGES_ERROR:
      return { ...State, isLoading: false, isError: action.payload.error };

    default:
      return State;
  }
};
