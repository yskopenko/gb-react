import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
       <AppBar color="secondary" position='static'>
        <Toolbar>
           <Button to="/" component={Link} variant="outlined" color="inherit">Home</Button>
           <Button to="/profile" component={Link} variant="outlined" color="inherit">Profile</Button>
           <Button to="/chats" component={Link} variant="outlined" color="inherit">Chats</Button>
        </Toolbar>
       </AppBar>
       <Routes>
         <Route component={Chats} path="/chats" />
         <Route component={Profile} path="/profile" />
         <Route component={Home} path="/" />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
