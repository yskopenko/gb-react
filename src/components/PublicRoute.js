import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function PublicRoute({ auth, ...rest }) {
  return !auth ? <Outlet {...rest} /> : <Navigate to={{pathname: "/profile"}} />;
}