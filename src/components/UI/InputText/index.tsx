import React from 'react';
import { InputText as Input } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

import { IInputText } from "../../../types/UI/IInput";
import { FieldInput } from "./styled";

const InputText = ({
  handleChange,
  label,
  name,
  value,
  isValid,
  displayedError,
}: IInputText) => {
  return (
    <FieldInput>
      <span className="p-float-label">
         <Input
           id={name}
           name={name}
           value={value}
           onChange={handleChange}
           className={classNames({ 'p-invalid': isValid })}
         />
         <label htmlFor={name} className={classNames({ 'p-error': isValid })}>
           {label}
         </label>
      </span>
      {displayedError}
    </FieldInput>
  );
};

export default InputText;
