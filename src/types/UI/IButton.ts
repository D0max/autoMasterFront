import React, {ButtonHTMLAttributes} from "react";

export interface IButton {
  children: React.ReactNode,
  color: string,
  onClick: () => void,
  width: string,
  size?: number
}

export type TButton = React.MouseEvent<HTMLButtonElement>
