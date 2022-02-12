import {Navigate} from "react-router-dom";
import {MessageInput} from "../../components/MessageInput";
import {MessageList} from "../../components/MessageList";
import {withChatMessages} from "../../hocs/withChatMessages";

export const MessagesRender = ({
                                 messageList,
                                 hasChat,
                                 onSendMessage,
                               }) => {
  if (!hasChat) {
    return <Navigate to="/chats"/>;
  }

  return (
    <>
      <MessageList messageList={messageList}/>
      <MessageInput onSend={onSendMessage}/>
    </>
  );
};


export const Messages = withChatMessages(MessagesRender);