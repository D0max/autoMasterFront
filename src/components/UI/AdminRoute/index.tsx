import React from "react";
import {Route, Navigate} from "react-router-dom";
import {IPrivateRoute} from "../../../types/UI/IPrivateRoute";
import {ROLES} from "../../../utils/hasPermission";

export default function ({isAllowed, ...rest}: IPrivateRoute) {
  return isAllowed.role.includes(ROLES.ADMIN) ? <Route {...rest}/> : <Navigate to="/"/>
}
