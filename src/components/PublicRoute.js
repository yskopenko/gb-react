import React from "react";
import { Route, Navigate } from "react-router-dom";

export function PublicRoute({ auth, ...rest }) {
  return !auth ? <Route {...rest} /> : <Navigate to={{pathname: "/profile"}} />;
}