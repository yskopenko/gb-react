import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Home } from "./routes/Home/index";
import { Chats } from "./routes/Chats/index";
import { Profile } from "./routes/Profile/index";
import { store, persistor } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <AppBar color="secondary" position='static'>
          <Toolbar>
            <Button to="/" component={Link} variant="outlined" color="inherit">Home</Button>
            <Button to="/profile" component={Link} variant="outlined" color="inherit">Profile</Button>
            <Button to="/chats" component={Link} variant="outlined" color="inherit">Chats</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats/*" element={<Chats />} />
        </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
