import {AUTHOR_BOT} from "../../constants/authors";
import {createMessage, mapMessageSnapshotToMessage} from "../../helpers";
import {messagesRef} from "../../api/firebase";

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

export const removeMessagesByChatIDWithThunk = (chatId) => (dispatch) =>{
  messagesRef.child(chatId).remove(() => {
    dispatch(removeMessagesByChatID(chatId));
  })
}

export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
  const userMessage = createMessage(author, text)
  dispatch(addMessage(userMessage, chatId));

  if (author === AUTHOR_BOT) {
    return;
  }

  const botMessage = createMessage(AUTHOR_BOT, 'hello')

  dispatch(addMessage(botMessage, chatId));
}

export const addMessageWithThunk = (message, chatId) => () => {
  messagesRef.child(chatId).push(message);
}

export const onTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on('child_added', (snapshot) => {
    dispatch(addMessage(mapMessageSnapshotToMessage(snapshot), chatId))
  })
}

export const offTrackingAddMessageWithThunk = (chatId) =>  () => {
  messagesRef.child(chatId).off('child_added')
}

export const onTrackingRemovedMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on('child_removed', () => {
    dispatch(removeMessagesByChatID(chatId));
  })
}

export const offTrackingRemovedMessageWithThunk = (chatId) =>  () => {
  messagesRef.child(chatId).off('child_removed')
}