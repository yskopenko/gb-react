import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";
import {chatsReducer} from "./chats/reducer";
import thunk from 'redux-thunk';
import {animalsReducer} from "./animals";
import {userReducer} from "./user/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  animals: animalsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  chats: chatsReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
