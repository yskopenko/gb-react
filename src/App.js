import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, CssBaseline } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

import { Home } from "./routes/Home/index";
import { Chats } from "./routes/Chats/index";
import { Profile } from "./routes/Profile/index";
import { Animals } from "./routes/Animals";
import { Login } from "./routes/Login";
import { SignUp } from "./routes/SignUp";
import { initAuthAction } from "./store/user/actions";
import { useEffect } from "react";
import { getIsAuth } from "./store/user/selectors";
import { PublicRoute } from "./components/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { auth } from "./api/firebase";


export const App = () => {

  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
  }, []);

  return (
      <>
      <CssBaseline />
        <BrowserRouter>
        <AppBar color="secondary" position='static'>
          <Toolbar>
            <Button to="/" component={Link} variant="outlined" color="inherit">Home</Button>
            <Button to="/profile" component={Link} variant="outlined" color="inherit">Profile</Button>
            <Button to="/chats" component={Link} variant="outlined" color="inherit">Chats</Button>
            <Button to="/animals" component={Link} variant="outlined" color="inherit">Animals</Button>
            <Button to="/login" component={Link} variant="outlined" color="inherit">Login</Button>
            <Button to="/sign-up" component={Link} variant="outlined" color="inherit">Sign up</Button>
            <Button variant="outlined" color="inherit" onClick={() => {auth.signOut();}}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <PrivateRoute auth={isAuth} path="/profile" element={<Profile />} />
          <Route auth={isAuth} path="/chats/*" element={<Chats />} />
          <Route path="/animals" element={<Animals />} />
          <PublicRoute auth={isAuth} path="/login" element={<Login />}/>
          <PublicRoute auth={isAuth} path="/sign-up" element={<SignUp />}/>
        </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
