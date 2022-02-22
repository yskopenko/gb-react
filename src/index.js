import {App} from "./App";
import {store} from "./store";
import {Provider} from "react-redux";

export const Homework = () => {

  return (<Provider store={store}>
    <App/>
  </Provider>)
}
