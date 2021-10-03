import * as ActionType from "./actionType";

export const getMessageRequest = () => {
  return {
    type: ActionType.GET_MESSAGES_REQUEST,
  };
};

export const getMessageSuccess = (messages) => {
  return {
    type: ActionType.GET_MESSAGES_SUCCESS,
    payload: {
      messages: messages,
    },
  };
};

export const getMessageError = (error) => {
  return {
    type: ActionType.GET_MESSAGES_ERROR,
    payload: {
      error: error,
    },
  };
};

export const getMessages =
  (conversationId, offset = 0) =>
  (dispatch) => {
    dispatch(getMessageRequest());
    //call tyhe api
    dispatch(getMessageSuccess());

    // dispatch(getMessageError());
  };
