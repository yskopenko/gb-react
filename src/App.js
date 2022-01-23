import './App.css';
import {Button, Message} from './components';

const text = 'Homework 1'

function App() {
  return (
    <div className="App">
      <Message text={text}/>

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
