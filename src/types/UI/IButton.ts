import React from "react";

export interface IButton {
  children: React.ReactNode,
  color: string,
  onClick: () => void,
  width: string,
  size?: number
}
