import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ChatList } from "./components/ChatList";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});

function App() {

  const classes = useStyles();

  const [messageList, setMessageList] = useState([]);

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {author, text};
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const onSendMessage = (value) => {
    sendMessage("user", value);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === 'bot') {
      return;
    }

    sendMessage('bot', 'hi')
  }, [messageList]);

  return (
    <div className={classes.wrapper}>
      <ChatList 
        list={[
          {
            name: 'name',
            id: '1'
          }, 
          {
            name: 'name',
            id: '1'
          }, 
          {
            name: 'name',
            id: '1'
          }, 
          {
            name: 'name',
            id: '1'
          }
        ]}
      />
      <div>
        <MessageList messageList={messageList} />
        <MessageInput onSend={onSendMessage} />
      </div>
    </div>
  );
}

export default App;
