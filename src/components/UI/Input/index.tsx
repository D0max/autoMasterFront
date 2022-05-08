import React from 'react';
// @ts-ignore
import {InputField, Error, Label} from './styled'

const Input = ({onChange, label, name}: any) => {
  return (
    <InputField>
      <input onChange={(e) => onChange(e)} type="text" name={name}/>
      <Label>{label}</Label>
      <Error>{}</Error>
    </InputField>
  );
};

export default Input;
