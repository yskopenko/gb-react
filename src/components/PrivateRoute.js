import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute({ auth, ...rest }) {
  return auth ? (
    <Outlet {...rest} />
  ) : (
    <Navigate to={{ pathname: "/login" }} />
  );
}
