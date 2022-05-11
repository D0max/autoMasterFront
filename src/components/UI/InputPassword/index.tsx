import React from 'react';
import { classNames } from 'primereact/utils';

import { FieldInput } from './styled';
import {Password} from "primereact/password";
import { IInputPassword } from "../../../types/UI/IInput";

const InputPassword = ({
  value,
  handleChange,
  isValid,
  displayedError
}: IInputPassword) => {
  return (
    <FieldInput>
      <span className="p-float-label">
        <Password id="password" name="password" value={value} onChange={handleChange} toggleMask
                  className={classNames({ 'p-invalid': isValid })} header={<h1>12</h1>} footer={<footer>112</footer>} />
        <label htmlFor="password" className={classNames({ 'p-error': isValid })}>Password*</label>
      </span>
      {displayedError}
    </FieldInput>
  );
};

export default InputPassword;
