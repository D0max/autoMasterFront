import React, {ChangeEvent} from "react";

export interface IInputText {
  handleChange: (event: TInput) => void,
  label: string,
  name: string,
  value: string,
  isValid: boolean,
  displayedError?: React.ReactNode,
}

export interface IInputPassword {
  handleChange: (event: TInput) => void,
  value: string,
  isValid: boolean,
  displayedError?: React.ReactNode,
}

export type TInput = ChangeEvent<HTMLInputElement>
