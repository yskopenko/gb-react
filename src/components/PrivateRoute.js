import React from "react";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ auth, ...rest }) {
  return auth ? (
    <Route {...rest} />
  ) : (
    <Navigate to={{ pathname: "/login" }} />
  );
}