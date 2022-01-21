import { useEffect, useState } from 'react';
import './App.css';
import {Button, Message} from './components';



function App() {

  const text = 'Homework 1'
  
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {author, text};
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const resetForm = () => {
    setValue('');
  };

  const onSumbitMessage = (event) => {
    event.preventDefault();
    sendMessage('user', value);
    resetForm();
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
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
    <div className="App">
      <Message text={text}/>

       <form onSubmit={onSumbitMessage}>
         <input
          className="text-send"
          onChange={onChangeMessageInput}
          placeholder="message"
          value={value}
          type="text"
         />
          <button
            className="button-send">
            Send
          </button>
       </form>
       <ul>
         {
           messageList.map((item, index) => (
              <li key={index}>
                {item.author} - {item.text}
              </li>
           ))
         }
       </ul>


      <Button
        color="alert">
        alert
      </Button>
      <Button disabled={false}>
        disabled=false
      </Button>
      <Button disabled={true}>
        disabled=true
      </Button>
      <Button disabled>
        disabled=true
      </Button>
      <Button
        color="primary"
        onClick={() => {
          console.log('click')
        }}
      >
        color="primary"
      </Button>

    </div>
  );
}

export default App;
