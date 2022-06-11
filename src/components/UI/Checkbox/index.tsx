import React from 'react';
import {Checkbox as CheckboxComponent} from "primereact/checkbox";
import {ICheckbox} from "../../../types/UI/ICheckbox";

const Checkbox = ({
  checked,
  setChecked,
  text,
  name,
}: ICheckbox) => {
  return (
    <div className="field-checkbox">
      <CheckboxComponent inputId="binary" name={name} checked={checked} onChange={setChecked} />
      <label htmlFor="binary">{text}</label>
    </div>
  );
};

export default Checkbox;
