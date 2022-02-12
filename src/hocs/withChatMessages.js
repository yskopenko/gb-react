import {useDispatch, useSelector} from "react-redux";
import {sendMessageWithThunk} from "../store/messages/actions";
import {getChatMessagesById} from "../store/messages/selectors";
import {hasChatById} from "../store/chats/selectors";
import {useParams} from "react-router-dom";
import {AUTHOR_USER} from "../constants/authors";


export const withChatMessages = (Component) => {
  return (props) => {
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));

    const onSendMessage = (text) => {
      dispatch(sendMessageWithThunk(AUTHOR_USER, text, chatId))
    };

    return <Component
      {...props}
      messageList={messageList}
      hasChat={hasChat}
      onSendMessage={onSendMessage}
    />
  }
}