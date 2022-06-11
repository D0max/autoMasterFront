import React from "react";
import {NavLink} from "react-router-dom";
import {LogoComponent} from "../../Headers/styled";

export default function () {
  return (
    <LogoComponent>
      <NavLink to="/">AutoMaster</NavLink>
    </LogoComponent>
  )
}
