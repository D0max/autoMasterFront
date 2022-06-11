import React from "react";
import { Navigate } from "react-router-dom";
import {IPrivateRoute} from "../../../types/UI/IPrivateRoute";

export default function ({isAllowed, children}: IPrivateRoute) {

  if (!isAllowed) return <Navigate to="/"/>

  return children

}
