import {AUTHOR_BOT} from "../../constants/authors";
import {createMessage} from "../../helpers";

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
})

export const removeMessagesByChatID = (chatId) => ({
  type: REMOVE_MESSAGES_BY_CHAT_ID,
  payload: chatId
})

export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
  const userMessage = createMessage(author, text)
  dispatch(addMessage(userMessage, chatId));

  if (author === AUTHOR_BOT) {
    return;
  }

  const botMessage = createMessage(AUTHOR_BOT, 'hello')

  dispatch(addMessage(botMessage, chatId));
}